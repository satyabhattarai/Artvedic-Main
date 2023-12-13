import "@/styles/globals.css";

import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import store from "store/store";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  const renderWithLayout =
    Component.getLayout ||
    function(page) {
      return (
        <SessionProvider session={session}>
          <Provider store={store}>
            <Layout>{page}</Layout>
          </Provider>
        </SessionProvider>

      )
    };
  return renderWithLayout(<Component {...pageProps} />);
}
