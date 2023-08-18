import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "jquery/dist/jquery.min.js";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { persistor } from "../redux/store";
import store from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import runAxiosSetup from "../helpers/run-axios-setup";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    runAxiosSetup();
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
          <ToastContainer autoClose={2000} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
