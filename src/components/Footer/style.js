import styled from 'styled-components';
import { colors } from '../../styles/global';

export const Container = styled.div`
  width: 100vw;
  max-width: 1920px;

  display: flex;
  justify-content: center;
  background: ${colors.black}
`;

export const FooterContainer = styled.div`
  height: 213px;
  display: flex;

  #info {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;

    h1 {
      margin-top: 25px;
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 27px;
      color: ${colors.white};
      margin-bottom: 16.5px;
    }

    span {
      width: 45px;
      height: 5px;
      background-color: ${colors.white};
      margin-bottom: 21px;
    }

    p {
      color: ${colors.white};
      font-family: Nunito;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 12px;
      margin-bottom: 12px;
    }
  }

    #contact {
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;

    #button-phone {
      img {
        margin-right: 0px;
        margin-left: 18.5px;
      }

      span {
        line-height: 100%;
      }
    }

    button {
      width: 195px;
      height: 38px;
      background-color: ${colors.white};
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      display: flex;
      align-items: center;

      span {
        font-family: Nunito;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
      }
      
      img {
        margin-left: 18px;
        margin-right: 16px;
      }
    }
  }

  #owner {
    width: 30%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 30px;

    div {
      display: flex;
      flex-direction: column;

      span {
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 10.6017px;
        line-height: 14px;
        color: ${colors.white};
      }
    }

  }
`;