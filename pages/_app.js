import "../styles/reset.css";
import "../styles/page.scss";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import { rootReduser } from "../redux/rootReducer";
import thunk from 'redux-thunk'

export default function MyApp({ Component, pageProps }) {
  const store = configureStore({
    reducer: rootReduser,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
  });
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}
