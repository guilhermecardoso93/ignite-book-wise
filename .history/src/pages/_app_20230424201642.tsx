import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

export const nunito = Nunito({ subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
