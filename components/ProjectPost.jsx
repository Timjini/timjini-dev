import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



function ProjectPost({title, excerpt, image, slug , stack,livesite, github}) {
  return (

    <section className='flex-post' id="projects">
      <div className='flex-post-content bg-green-200'>
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mt-4 mb-1 text-gray-600 box"> {excerpt}</p>
        <div className='flex-post-links'>
          <Link href={"https://github.com/Timjini/"+slug} rel='noreferrer' target='_blank' className='m-2 link-btn text-gray-700 transition hover:text-green-200/75'><span>github Repo</span></Link>
          <Link href={`${livesite}`} target="_blank" className='m-2 text-gray-700 transition hover:text-gray-700/75 link-btn'><span>Live App</span></Link>
          <Link href={"/projects/"+slug}  className='m-2 text-gray-700 transition hover:text-gray-700/75 link-btn'><span>Read more</span></Link>
        </div>
        </div> 
        <div className='flex-post-img'>
        <Image src={image.url} alt="" width={500} height={500} />
        </div>
    </section>
  
  )
}

export default ProjectPost