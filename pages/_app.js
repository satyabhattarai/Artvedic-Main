import "@/styles/globals.css";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
    return <Layout>{page}</Layout>;
    };
  return renderWithLayout(<Component {...pageProps} />);
}
// {page} is children that is passed to layout....anything that is inside.