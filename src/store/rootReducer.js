import { combineReducers } from 'redux';

import product from './modules/products';
import news from './modules/news';

const rootReducer = combineReducers({
  product,
  news,
})

export default rootReducer;