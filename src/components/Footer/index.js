import {
  Container,
  FooterContainer
} from './style';

import iconPhone from '../../assets/phone.svg';
import iconMail from '../../assets/mail.svg';
import iconCorebiz from '../../assets/corebiz.svg';
import iconVtex from '../../assets/vtex.svg';

function Footer() {
  return (
    <Container>
      <FooterContainer className="container">
        <div id="info">
          <h1>Localização</h1>
          <span />
          <p>Avenida Andrômeda, 2000 Bloco 6 e 8</p>
          <p>Alphaville SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
        <div id="contact">
          <button>
            <img src={iconMail} alt="Entre em contato" />
            <span>ENTRE EM CONTATO</span>
          </button>
          <button id="button-phone">
            <img src={iconPhone} alt="Fale com o nosso consultor" />
            <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
          </button>
        </div>
        <div id="owner">
          <div>
            <span>
              Created by
            </span>
            <img src={iconCorebiz} alt="Corebiz" />
          </div>
          <div>
            <span>
              Powered by
            </span>
            <img src={iconVtex} alt="Vtex" />
          </div>
        </div>
      </FooterContainer>
    </Container>
  )
}

export default Footer;