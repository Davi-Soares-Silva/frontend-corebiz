import styled from 'styled-components';
import { colors } from '../../styles/global';

export const Container = styled.div`
  width: 100vw;
  max-width: 1920px;
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
`;

export const NewsContainer = styled.div`
  height: 146px;
  display: flex;
  flex-direction: column;

  #title {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    h1 {
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 22px;
    }
  }

  #registered {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    h1 {
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 22px;
    }
  }

  #button-new-register {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 60px;

    button {
      width: 328px;
      height: 48px;
      
      background: ${colors.black};
      border-radius: 5px;
      cursor: pointer;

      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 14px;
      color: ${colors.white};
    }
  }

  form {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    padding-top: 24px;
    gap: 20px;
    background: ${colors.newsGray};

    div {
      display: flex;
      flex-direction: column;

      input {
        width: 280px;
        height: 48px;
        padding-left: 16px;
        background: ${colors.white};
        border: none;
        border-radius: 5px;

        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: ${colors.darkGray};
        margin-bottom: 8px;
      }

      input.error {
        border: solid 1px ${colors.errorRed}
      }
      
      span {
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 12px;
        color: ${colors.errorRed};
      }

    }


    button {
      width: 140px;
      height: 48px;
      
      background: ${colors.black};
      border-radius: 5px;
      cursor: pointer;

      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 14px;
      color: ${colors.white};
      outline: none;
    }

    button.error {
      background-color: ${colors.errorGray};
      transition: 0.5s;
    }
  }
`;