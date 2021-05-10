import produce from 'immer'
import { getLocalStorage } from '../../../utils';

const INITIAL_STATE = {
  productList: [],
  cart: getLocalStorage('CART', 0),
  registered: false,
  loading: false,
}

const products = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case '@products/FETCHING_DATA':
        draft.loading = true;
        break;
      case '@products/FETCH_DATA':
        draft.productList = action.payload;
        break;
      case '@products/INCREMENT_CART':
        localStorage.setItem('CART', JSON.stringify(draft.cart + 1));
        draft.cart += 1;
        break;
      default:
        break;
    }
  })

export default products;