import { SessionProvider } from "next-auth/react";
import { DataProvider } from "../store/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </SessionProvider>
  );
}
