import React from 'react'
import fullStack from '../public/full-stack-dev.png'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <div class="mx-auto max-w-5xl px-4 py-8">
          <section class="rounded-lg bg-gray-200 p-8 hover:bg-green-200 ">
              <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                  <Image
                      alt="timjini"
                      src={fullStack}
                      class="aspect-square w-full rounded-lg object-cover"

                      />

                  <blockquote class="sm:col-span-2">
                      <p class="text-xl  sm:text-lg">
                          I am a full-stack developer with skills in Ruby on Rails and React. I can design and build intuitive web applications from start to finish, utilizing the latest tools and best practices. I have a strong foundation in both front-end and back-end development and am proficient in agile methodologies. I am able to create dynamic, full-featured web applications that provide a seamless user experience.
                      </p>

                      <cite class="mt-8 inline-flex items-center not-italic">
                          <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                          <p class="text-sm uppercase text-gray-500 sm:ml-3">
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