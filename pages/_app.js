import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return (
    <>
    <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-ZVW4JEGL7Q" />
  <Script id="google-analytics" 
    strategy='afterInteractive'>
    {`
     window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZVW4JEGL7Q');
    `}
    </Script>
    <Navbar />
    <Component {...pageProps} />
  </>
  )
 
}
