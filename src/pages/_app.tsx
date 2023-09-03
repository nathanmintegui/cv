import { type AppType } from "next/dist/shared/lib/utils";
import Context from "~/context/context";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Context>
      <Component {...pageProps} />;
    </Context>
  );
};

export default MyApp;
