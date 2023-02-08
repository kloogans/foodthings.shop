import { AppProps } from "next/app";
import Layout from "components/Layout";
import "tailwindcss/tailwind.css";
import "styles/app.css";

function FuckedUpShopApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default FuckedUpShopApp;
