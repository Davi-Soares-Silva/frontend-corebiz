import {
  Container,
  SearchContainer,
  ClientInfoContainer,
  LogoContainer,
} from './style';

import logo from '../../assets/logo.svg';
import imgMagnifyingGlasses from '../../assets/magnifying-glass.svg'
import imgShoppingCart from '../../assets/shopping-cart.svg'
import imgUser from '../../assets/user.svg'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Header() {

  const { cart } = useSelector((state) => state.product);

  return (
    <Container className="container">
      <LogoContainer>
        <img src={logo} alt="Logo" />
      </LogoContainer>
      <SearchContainer>
        <div>
          <input type="text" placeholder="O que está procurando?" />
          <img src={imgMagnifyingGlasses} alt="Buscar" />
        </div>
      </SearchContainer>
      <ClientInfoContainer>
        <div id="my-account">
          <button>
            <img src={imgUser} alt="Usuário" />
            <span>Minha Conta</span>
          </button>
        </div>
        <div>
          <button>
            <img src={imgShoppingCart} alt="Cart" />
            <span>{cart || 0}</span>
          </button>
        </div>
      </ClientInfoContainer>
    </Container>
  )
}

export default Header;