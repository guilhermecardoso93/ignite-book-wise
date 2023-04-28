import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Nunito } from "next/font/google";
import { globalStyles } from "@/styles/global";
globalStyles();

export const nunito = Nunito({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider>
      <div className={nunito.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
