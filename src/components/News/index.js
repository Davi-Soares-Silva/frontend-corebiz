import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendUser, unlockNewRegister } from '../../store/modules/news/actions';
import {
  Container,
  NewsContainer,
} from './style';




function News() {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const { registered } = useSelector((state) => state.news);


  const validateFields = () => {
    if (name === "") setNameError("Preencha com seu nome completo");
    if (email.indexOf('@') < 0) setEmailError('Preencha com um e-mail válido')
    if (email === "") setEmailError("Preencha com um e-mail válido");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    validateFields();

    const formData = {
      name,
      email,
    }

    if (!nameError && !emailError) {
      dispatch(sendUser(formData));
    }

  }

  const handleInput = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        setNameError("");
        break;
      case "email":
        setEmail(e.target.value);
        setEmailError("");
        break;
      default:
        break;
    }
  }

  const handleNewRegister = () => {
    dispatch(unlockNewRegister());
  }

  return (
    <Container>
      <NewsContainer className="container">
        {registered ? (
          <>
            <div id="registered">
              <h1>Seu e-mail foi cadastrado com sucesso!</h1>
              <span>A partir de agora você receberá as novidades e ofertas exclusivas</span>
            </div>
            <div id="button-new-register">
              <button onClick={handleNewRegister}>Cadastrar novo e-mail</button>
            </div>
          </>
        ) : (
          <>
            <div id="title"><h1>Participe das nossas news com promoções e novidades!</h1></div>
            <form>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => handleInput(e)}
                  className={nameError ? "error" : ""}
                />
                {nameError && (
                  <span>{nameError}</span>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => handleInput(e)}
                  className={emailError ? "error" : ""}
                />
                {emailError && (
                  <span>{emailError}</span>
                )}
              </div>
              <button onClick={(e) => handleSubmit(e)} className={emailError || nameError ? "error" : ""}>Eu quero!</button>
            </form>
          </>
        )}
      </NewsContainer>
    </Container>
  )
}

export default News;