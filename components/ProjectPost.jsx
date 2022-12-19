import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ProjectPost({title, excerpt, image, slug}) {
  return (
    <section class="overflow-hidden sm:grid sm:grid-cols-2 p-16">
        <Image
        alt="Student"
        src={image.url}
        class=" object-cover sm:h-full"
        width={1139}
        height={723}
        />

        <div class="p-8 md:p-12 lg:px-16 lg:py-24 ">
        <div className='mx-auto max-w-lg text-center lg:mx-0 '>
          <h1 className='text-3xl font-bold sm:text-4xl pt-24 text-gray-700'>
                {title}
            </h1>
        
                <p class=" text-gray-500 md:mt-4 md:block">
                {excerpt}
                </p>
        
        <div class="mt-4 md:mt-8 flex gap-10 ">
            <Link href="https://github.com/Timjini/aid-frontend" rel='noreferrer' target='_blank'
            className="text-gray-700 transition hover:text-gray-700/75"
            >
            GitHub Repo
            </Link>
            <Link href="https://aid-app.netlify.app/" rel='noreferrer' target='_blank'
            className="text-gray-700 transition hover:text-gray-700/75"
            >
            Live Website
            </Link>
            
            <Link href={"/projects/"+slug} 
            className="text-gray-700 transition hover:text-gray-700/75"
            >
            Read More
            </Link>
                
        </div>
    </div>
    </div>
  </section>
  

  )
}

export default ProjectPost