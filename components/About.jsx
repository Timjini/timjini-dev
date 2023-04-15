import React from 'react'
import fullStack from '../public/static/images/full-stack-dev.png'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
          <section className="rounded-lg bg-gray-50 p-8 hover:bg-green-200 ">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                  <Image
                      alt="timjini"
                      src={fullStack}
                      className="aspect-square w-full rounded-lg object-cover"

                      />

                  <blockquote className="sm:col-span-2">
                      <p className="text-xl  sm:text-lg">
                          I am a full-stack developer with skills in Ruby on Rails and React. I can design and build intuitive web applications from start to finish, utilizing the latest tools and best practices. I have a strong foundation in both front-end and back-end development and am proficient in agile methodologies. I am able to create dynamic, full-featured web applications that provide a seamless user experience.
                      </p>

                      <cite className="mt-8 inline-flex items-center not-italic">
                          <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                          <p className="text-sm uppercase text-gray-500 sm:ml-3">
                              <strong>Hatim Laajini</strong>, <Link href="/about" className='hover:bg-green-200'>About me</Link>
                          </p>
                      </cite>
                  </blockquote>
              </div>
          </section>
      </div>

  )
}

export default About