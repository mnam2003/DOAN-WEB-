import HeaderComponent from "@/components/HeaderComponent";
import "@/styles/globals.css";
import { Affix, ConfigProvider, Layout } from "antd";
import type { AppProps } from "next/app";
import "@ant-design/v5-patch-for-react-19";

const {Content, Footer} = Layout

export default function App({ Component, pageProps }: AppProps) {
  return <ConfigProvider
    theme={{
      token: {
        colorPrimary: 'EE284B',
        fontFamily: 'Manrope, sans-serif',
        fontSize: 18
      }
    }}>
      <Layout>
        <Affix offsetTop={0}>
          <HeaderComponent/>
        </Affix>
        <Content>
          <Component {...pageProps} />;
        </Content>
        <Footer>
        </Footer>
      </Layout>
  </ConfigProvider>
}
