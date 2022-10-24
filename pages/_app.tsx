import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Flowbite } from 'flowbite-react'

function MyApp({ Component, pageProps }: AppProps) {


  return <Flowbite theme={{
    theme: {
      carousel: {
        indicators: {
          base: "h-3 w-3 rounded-full  ",
          active: {
            on: "bg-purple-700  hover:bg-purple-700 ",
            off: "bg-purple-400  hover:bg-purple-700 "
          }
        }
      }
    }
  }} >
    <Component {...pageProps} />
  </Flowbite>
}

export default MyApp
