import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductRating from './ProductRating/index.js';

import { findProducts, incrementCart } from '../../store/modules/products/actions';

import {
  Container,
  ShelfContainer,
  CardProductContainer,
} from './style.js';

import { formatPrice } from '../../utils';

import iconRightArrow from '../../assets/right-arrow.svg';
import iconLeftArrow from '../../assets/left-arrow.svg';
import iconFlag from '../../assets/flag.svg';


function Shelf() {
  const dispatch = useDispatch();

  const [cartQuantity, setCartQuantity] = useState();
  const { productList, cart } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(findProducts());

    setCartQuantity(localStorage.getItem('CART') || 0);
  }, [])

  const handleBuy = () => {
    dispatch(incrementCart())
  }

  const [initialIndex, setInitialIndex] = useState(0);

  const items = [];

  productList.map(product => {
    const { productId, productName, price, stars, listPrice, installments, imageUrl } = product;

    items.push(
      <CardProductContainer key={productId}>
        {listPrice && (
          <img src={iconFlag} alt="" className="off" />
        )}
        <img src={imageUrl} alt="product" />
        <div className="info-container">
          <p>
            {productName}
          </p>
          <ProductRating ratingCount={stars} />
          <span className="price">
            {listPrice && (
              <>de R$ {formatPrice(listPrice)}</>
            )}
          </span>
          <h1>por R$ {formatPrice(price)}</h1>

          <span className="portion">
            {installments.length > 0 && (
              <>
                ou em {installments[0].quantity}x de R$ {formatPrice(installments[0].value)}
              </>
            )}
          </span>
          <button className="buy" onClick={handleBuy}>
            COMPRAR
          </button >
        </div>
      </CardProductContainer>
    )
  })

  const next = () => {
    if (initialIndex + 5 <= items.length) setInitialIndex(initialIndex + 1);
  }

  const back = () => {
    if (initialIndex >= 1) setInitialIndex(initialIndex - 1);
  }

  return (
    <Container>
      <ShelfContainer className="container">
        <div id="title">
          <h1>Mais Vendidos</h1>
          <div />
        </div>
        <div id="content">
          {items.slice(initialIndex, initialIndex + 4).map(item => item)}
          <button id="left-button" className="slide-button" onClick={back}><img src={iconLeftArrow} alt="Voltar" /></button>
          <button id="right-button" className="slide-button" onClick={next}><img src={iconRightArrow} alt="Avançar" /></button>
        </div>
      </ShelfContainer>
    </Container>
  )
}

export default Shelf;