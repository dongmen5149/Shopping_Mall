import type { AppProps } from "next/app";
import { getClient } from "./queryClient";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./scss/index.scss";
import Gnb from "./component/Gnb";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("./mocks");
}
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Gnb />
      <ReactQueryDevtools initialIsOpen={false} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
