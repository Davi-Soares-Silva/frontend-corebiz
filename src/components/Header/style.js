import { colors } from '../../styles/global';
import styled from 'styled-components';

export const Container = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  background: #FFFFFF;
`;

export const LogoContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 170px;
    height: 40px;
    margin: 0 0 0.5rem 0.5rem;
  }
`;

export const SearchContainer = styled.div`
  flex: 2.5;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    width: 85%;
    height: 22px;
    position: relative;
    border-bottom: 0.1rem solid black;

    input {
      border: none;
      width: 100%;
      height: 100%;
      outline: none;
      padding-bottom: 0.5rem;
    }

    img {
      position: absolute;
      right: 0;
      bottom: 0.5rem;
    }
  }
`;

export const ClientInfoContainer = styled.div`
  display: flex;
  flex: 0.8;

  #my-account{
    justify-content: center;
    flex: 1;

    span {
      background: none;
      color: ${colors.gray};
      font-size: 13px;
      margin-left: -8px;
    }
  }
  
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 0.5;

    button {
      background: none;
      border: none;
      cursor: pointer;
      outline: none;
      display: flex;
      align-items: center;
      width: auto;
      margin-left: 16px;

      img {
        margin-right: 4px;
        width: 18px;
        height: 18px;
      }

      span {
        background: ${colors.red};
        font-family: Nunito, sans-serif;
        font-size: 10px;
        padding: 4px 8px;
        border-radius: 50%;
        color: ${colors.white};
      }
    }
    /* img {
      margin-right: 10px;
    } */
  }
`;
