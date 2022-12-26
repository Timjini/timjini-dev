import { PaperClipIcon } from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Resume() {
  return (
    <>
    <Navbar/>
    <div className="overflow-hidden bg-white shadow sm:rounded-lg md:p-20 p-5 ">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Resume</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and information.</p>
      </div>
      <div className="border-t border-gray-200">  
        <dl>
          <div className="bg-green-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Hatim Laajini</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Job Title</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Full-stack Developer</dd>
          </div>
          <div className="bg-green-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">hatim.jini@gmail.com</dd>
          </div>  
          <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            I am a full-stack developer with skills in Ruby on Rails and React. I can design and build intuitive web applications from start to finish, utilizing the latest tools and best practices.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">resume_full_stack_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Link href="/static/Hatim_Laajini_Dev.pdf" target="_blank"  className="font-medium text-indigo-600 hover:text-indigo-500" download>
                      Download
                    </Link>
                  </div>
                </li>

              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </>

  )
}
