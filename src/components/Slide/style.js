import styled from 'styled-components';
import { colors } from '../../styles/global';

import backgroundBanner from '../../assets/banner.png';


export const Container = styled.div`
  width: 100vw;
  display: flex;
  max-width: 1920px;
  justify-content: center;
  /* background: red; */
  height: 430px;
`;

export const Banner = styled.div`
  display: flex;
  width: inherit;
  height: inherit;
  justify-content: center;
`;

export const InformationContainer = styled.div`
  flex: 1;
  position: relative;
  background-image: url(${backgroundBanner});

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: black; */

  p, h2 {
    color: ${colors.white}
  }

`;

export const ImageContainer = styled.div`
  flex: 1;
  background-color: #ccc;

  img {
    width: 100%;
    height: 100%;
  }
`;
