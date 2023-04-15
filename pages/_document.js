import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScroll } from 'framer-motion'
import { useSpring } from 'framer-motion'
import { motion } from 'framer-motion'


export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
