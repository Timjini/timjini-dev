import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



function ProjectPost({title, excerpt, image, slug , stack,livesite, github}) {
  return (
    <section className='flex justify-center items-center h-full flex-wrap gap-4' id="projects" key={title}>
    <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className='mx-auto max-w-lg text-center lg:mx-0 lg:text-left'>
    <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
    <p className="mt-4 mb-1 text-gray-600 box"> {excerpt}</p>
      </div>


      <div
        className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
      >
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 ">
          {stack.map((stack) => (
         
            // eslint-disable-next-line react/jsx-key
            <Image src={stack.url} alt="" width={100} height={100}
             className='hover:scale-110 transform transition duration-500 ease-in-out'
             key={stack.url}
            />

          ))}
          <Link href={"https://github.com/Timjini/"+github} rel='noreferrer' target='_blank' className='m-2 text-gray-700 transition hover:text-gray-700/75'>github Repo</Link>
          <Link href="/" className='m-2 text-gray-700 transition hover:text-gray-700/75'>Live Project</Link>
          <Link href={"/projects/"+slug}  className='m-2 text-gray-700 transition hover:text-gray-700/75'>Read More</Link>
        </div>
        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
          <Image src={image.url} alt="" width={500} height={500} />

        </div>
      </div>
    </div>
  </section>
  
  )
}

export default ProjectPost