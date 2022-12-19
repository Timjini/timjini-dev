import React from 'react'
import Image from 'next/image'
import heroImg from '../public/logo-hl.png'
import heroBanner from '../public/Ror.png'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import dev from '../public/dev.jpg'


function Hero() {
  return (
    <section className="">
         <div className='flex justify-center items-center h-full flex-wrap gap-4'>
          <div className='mx-auto max-w-lg text-center lg:mx-0 '>
          <h1 className='text-3xl font-bold sm:text-4xl pt-24'>Full Stack Dev RoR & JS Framworks</h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block rounded border border-green-100 bg-green-200 px-12 py-3 text-sm font-medium text-dark hover:bg-transparent hover:text-dark focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

          </div>
      </div>
        <div className='ml-18 bg-white '>
        <Image src={dev} alt='nextjs' width={500} height={500} />
      </div>
      </div>
</section>

  )
}

export default Hero