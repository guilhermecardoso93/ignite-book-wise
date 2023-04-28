import type { AppProps } from "next/app";
import { SectionProvider } from "next/section"
import { Nunito } from "next/font/google";
import { globalStyles } from "@/styles/global";
globalStyles();

export const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SectionProvider>
      <div className={nunito.className}>
        <Component {...pageProps} />
      </div>
    </SectionProvider>
  );
}
