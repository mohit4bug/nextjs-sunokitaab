import { Inter_Tight } from 'next/font/google'
const font = Inter_Tight({
  subsets: ['latin']
})
export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}
