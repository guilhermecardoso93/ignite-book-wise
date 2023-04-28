import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Nunito } from "next/font/google";
import { globalStyles } from "@/styles/global";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}


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
