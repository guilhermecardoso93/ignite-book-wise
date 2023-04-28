import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

globalStyles()

export const nunito = Nunito({ subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
