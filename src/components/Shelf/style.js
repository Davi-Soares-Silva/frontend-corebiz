import styled from 'styled-components';
import { colors } from '../../styles/global';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ShelfContainer = styled.div`
  height: 470px;
  padding: 20px;

  display: flex;
  flex-direction: column;

  #title {
    width: 100%;
    height: 10%;

    h1{
      font-family: Nunito;
      font-weight: 900;
      font-size: 20px;
    }

    div{
      width: 65px;
      padding: 2.5px 0px;
      background: ${colors.mediumGray};
    }
  }

  #content {
    position: relative;

    width: 100%;
    height: 90%;
    padding: 20px;
    
    display: flex;
    justify-content: flex-start;

    overflow: hidden;

    .slide-button {
      position: absolute;
      top: 50%;
      border: none;
      outline: none;
      cursor: pointer;
      background: none;

      img {

      }
    }

    #right-button{
      right: 0;
    }

    #left-button {
      left: 0;
    }
  }
`;

export const CardProductContainer = styled.div`
  width: 216px;
  height: 353px;
  margin-right: 100px;
  transition: 0.5s;

  position: relative;

  .off{
    position: absolute;
    right: 0;
  }

  :hover {
    background-color: ${colors.hoverGray};
  }

  :hover .buy {
    opacity: 1;
  }

  .info-container {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-family: Nunito;
      font-size: 12px;
      font-weight: 600;
      margin-top: 10px;
      color: ${colors.gray};
      margin-bottom: 3.65px;
    }

    div {
      display: flex;
      gap: 5px;
      margin-bottom: 7.35px;
    }

    .price {
      font-family: Nunito;
      color: ${colors.gray};
      font-size: 12px;
      text-decoration: line-through;
      height: 12px;
      margin-bottom: 2px;
    }

    h1 {
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 4px;
    }

    .portion {
      font-family: Nunito;
      color: ${colors.gray};
      font-size: 11px;
      height: 12px;
      margin-bottom: 8.17px;
    }

    button {
      width: 125.28px;
      height: 32.42px;
      margin-bottom: 14px;
      cursor: pointer;
      background: ${colors.black};
      border-radius: 5px;
      color: ${colors.white};
      
      font-family: Nunito;
      font-weight: 700;
      font-size: 12px;

      opacity: 0;
      transition: 0.5s;
    }

  }
`;
