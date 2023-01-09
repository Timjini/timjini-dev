import React from 'react'
import Link from 'next/link'

function CTA() {
  return (
    <div className="">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-400 sm:text-3xl">
        <span className="block">CONTACT ME TODAY</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <Link
            href="https://wa.me/905412492756"
            target="_blank"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-300 px-5 py-3 text-base font-medium text-white hover:bg-green-400"
          >
            WhatsApp Chat
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CTA