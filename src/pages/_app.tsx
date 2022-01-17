import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import ContextProvider from "../context";
const App = ({ Component, pageProps }: AppProps) => (
  <ContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ContextProvider>
);
export default App;
