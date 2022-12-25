import React from 'react'
import Image from 'next/image'
import heroImg from '../public/logo-hl.png'
import heroBanner from '../public/Ror.png'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import dev from '../public/static/images/dev.jpg'


function Hero() {
  return (
    <section className="flex justify-center items-center h-full flex-wrap gap-4">
      <div className='max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div
          className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
        >
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">Full Stack Dev RoR & JS Frameworks</h2>

            <p className="mt-4 text-gray-600">
              I have worked with multiple frameworks and languages. Here are some of the frameworks and languages I have worked with.
            </p>

            <a
              className="mt-8 inline-flex items-center rounded border border-green-100 bg-green-200 px-8 py-3 text-dark hover:bg-green-300  focus:outline-none focus:ring active:text-indigo-500"
              href="#projects"
            >
              <span className="text-sm font-medium"> Check My Projects </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>


            </a>
          </div>
          <div className='ml-18 bg-white '>
            <Image src={dev} alt='nextjs' width={500} height={500} />
          </div>
        </div>
      </div>
    </section>


  )
}

export default Hero