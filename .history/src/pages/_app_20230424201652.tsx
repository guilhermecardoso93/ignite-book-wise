import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

import '@/styles/globals.css'

export const nunito = Nunito({ subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
