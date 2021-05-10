import { products } from "../../../services/api";

export const findProducts = () => async (dispatch) => {
  dispatch({ type: '@products/FETCHING_DATA' });

  try {
    const { data } = await products.findAll();

    dispatch({ type: '@products/FETCH_DATA', payload: data });
  } catch (error) {
    console.log(error);
  }

}

export const incrementCart = (value) => async (dispatch) => {
  dispatch({ type: '@products/INCREMENT_CART' });
}