import type { AppProps } from "next/app";
import { getClient } from "./queryClient";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./scss/index.scss";
import Gnb from "./component/Gnb";
import initMockAPI from "./mocks";
import { RecoilRoot } from "recoil";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  initMockAPI();
}

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Gnb />
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
