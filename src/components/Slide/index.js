import { Container, Banner, InformationContainer, ImageContainer } from './style';

import imgHandBanner from '../../assets/hand-banner.png';

function Slider() {
  return (
    <Container>
      <Banner>
        <InformationContainer>
          <p>Olá, o que você está buscando?</p>
          <h2>Criar ou Migrar seu ecommerce?</h2>
        </InformationContainer>
        <ImageContainer>
          <img src={imgHandBanner} alt="banner" />
        </ImageContainer>
      </Banner>
    </Container>
  )
}

export default Slider;