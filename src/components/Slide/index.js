import {
  Container,
  Banner,
  InformationContainer,
  SliderInfo,
} from './style';

function Slider() {
  return (
    <Container>
      <Banner>
        <InformationContainer />
        <SliderInfo>
          <div className="selected" />
          <div />
          <div />
          <div />
        </SliderInfo>
      </Banner>
    </Container>
  )
}

export default Slider;