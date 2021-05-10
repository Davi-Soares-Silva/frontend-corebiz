import { news } from "../../../services/api";
import { toast } from 'react-toastify';

export const sendUser = (user) => async (dispatch) => {
  try {
    const { data } = await news.createUser(user);

    dispatch({ type: '@news/REGISTERED_USER' })

    toast.success(data.message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  } catch (error) {
    console.log(error);
  }
}

export const unlockNewRegister = () => async (dispatch) => {
  dispatch({ type: '@news/REGISTERED_USER' })
}