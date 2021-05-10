import Home from './pages/Home';
import store from './store/index';

import GlobalStyle from './styles/global';
import "react-alice-carousel/lib/alice-carousel.css";
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <Home />
        <GlobalStyle />
      </div>
      <ToastContainer />
    </Provider>
  );
}

export default App;
