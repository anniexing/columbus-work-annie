import { Provider } from "react-redux";
import debounce from 'debounce';
import { saveState } from '../utils/localStorage';
import store from "../store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";


const MyApp = ({ Component, pageProps }) => {
  store.subscribe(
    debounce(async () => {
      await saveState(store.getState());
    }, 800)
  );
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
