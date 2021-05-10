import produce from 'immer'

const INITIAL_STATE = {
  productList: [],
  registered: false,
  loading: false,
}

const news = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case '@news/REGISTERED_USER':
        draft.registered = !draft.registered;
        break;
      default:
        break;
    }
  })

export default news;