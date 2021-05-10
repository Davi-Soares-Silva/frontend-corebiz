import styled from 'styled-components';
import { colors } from '../../styles/global';

import backgroundBanner from '../../assets/banner.png';


export const Container = styled.div`
  width: 100vw;
  display: flex;
  max-width: 1920px;
  justify-content: center;
  height: 430px;
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  width: inherit;
  height: inherit;
  justify-content: center;
`;

export const InformationContainer = styled.div`
  flex: 1;
  position: relative;
  background-image: url(${backgroundBanner});
  background-position: center;  

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p, h2 {
    color: ${colors.white}
  }

`;

export const SliderInfo = styled.div`
  position: absolute;
  bottom: 20px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  .selected{
    background: ${colors.red};
  }

  div{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${colors.lightGray};
    cursor: pointer;
  }
`;
