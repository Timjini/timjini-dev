import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Image from 'next/image'


export default function Contact() {
  const form = useRef();

  const [confirmation, setConfirmation] = useState(false)
  const [loading, setLoading] = useState(false)

const handleLoading = () => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
    setConfirmation(true)
  }, 3000)
}

  if (loading === true) {
    return (
      <>
        <section className="">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <h2 className="text-3xl mb-1 font-bold">CONTACT ME</h2>
        <p className="max-w-xl text-lg">
            I am always open to new opportunities.
            If you have any questions or want to work together, feel free to contact me. 
        </p>

        <div className="mt-8">
          <Link href="tel:+905412492756" className="text-2xl font-bold">
            +90 541 249 27 56
          </Link>

        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <h2 className='text-3xl text-gray-800 '>Loading..</h2>
        <Image src="/giphy.gif" width={100} height={100} alt="loading Gif" />
        <br/>
      </div>
    </div>
  </div>
</section>
</>
    )
  }



  if(confirmation) {
    return (
      <>
<section className="">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <h2 className="text-3xl mb-1 font-bold">CONTACT ME</h2>
        <p className="max-w-xl text-lg">
            I am always open to new opportunities.
            If you have any questions or want to work together, feel free to contact me. 
        </p>

        <div className="mt-8">
          <Link href="tel:+905412492756" className="text-2xl font-bold">
            +90 541 249 27 56
          </Link>

        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <h2 className='text-3xl text-gray-800 '>Thank you for reaching out, I will get back to you soon.</h2>
        <br/>
        <Link href='https://wa.me/905412492756' className="inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-5 py-3 text-white sm:w-auto" target="_blank"> WhatsApp line </Link>
      </div>
    </div>
  </div>
</section>

   
    </>

    )
  }

  const sendEmail = (e) => {
    e.preventDefault();
    handleLoading();
    emailjs.sendForm('service_0xctw46', 'template_efihzda', form.current, 'user_1mP9aHGvECxiLdV8OdmnO')
      .then((result) => {
          console.log(result.text);
          setConfirmation(true);
      },  (error) => {
          console.log(error.text);
      });
  };




  
  
  return (


<section className="" id="contact">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <h2 className="text-3xl mb-1 font-bold">CONTACT ME</h2>
        <p className="max-w-xl text-lg">
            I am always open to new opportunities.
             If you have any questions or want to work together, feel free to contact me. 
        </p>

        <div className="mt-8">
          <a href="" className="text-2xl font-bold">
            +90 541 249 27 56
          </a>

        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                name='email'
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                name='phone'
              />
            </div>
          </div>


          <div>
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              name='message'
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-green-200 px-5 py-3 text-dark sm:w-auto"
            >
              <span className="font-medium"> Send Enquiry </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}