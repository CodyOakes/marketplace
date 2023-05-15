import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "~/components/NavBar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <div className="text-white">
        <NavBar />
        <Component {...pageProps} />;
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
