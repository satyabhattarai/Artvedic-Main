import "@/styles/globals.css";

import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import store from "store/store";

export default function App({ Component, pageProps }) {
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return(
        <Provider store={store}>
      <Layout>{page}</Layout>
      </Provider>
      )
    };
  return renderWithLayout(<Component {...pageProps} />);
}
// {page} is children that is passed to layout....anything that is inside.
