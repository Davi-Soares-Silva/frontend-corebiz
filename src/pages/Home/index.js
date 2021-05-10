import Header from "../../components/Header";
import Slide from "../../components/Slide";
import Shelf from "../../components/Shelf";
import News from "../../components/News";
import Footer from "../../components/Footer";

import { Container } from "./style";

function Home() {
  return (
    <Container>
      <Header />
      <Slide />
      <Shelf />
      <News />
      <Footer />
    </Container>
  )
}

export default Home;