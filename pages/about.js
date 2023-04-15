import React from 'react';
import Profile from '../public/profile.png'
import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <><div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center py-8  px-2">
          <div className="w-full max-w-md">
              <div className="flex justify-center mb-6">
                  <Image src={Profile} alt="Profile Picture" className="w-32 h-32 rounded-full" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Full-Stack Developer</h1>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                  As a full-stack developer with expertise in Ruby on Rails and React, I have a strong foundation in both front-end and back-end development. I am able to design and build intuitive, responsive web applications from start to finish, utilizing the latest tools and best practices in the industry.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                  With my background in Ruby on Rails, I am proficient in developing and maintaining server-side applications using the MVC architecture. I have a strong understanding of database design and can effectively implement CRUD functionality in my projects. I am also comfortable with agile development methodologies and have experience collaborating with cross-functional teams.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                  In addition to my skills in Ruby on Rails, I have a strong understanding of React and its ecosystem. I am able to build modern, interactive user interfaces using the latest features of the React library. I have experience working with state management tools such as Redux and am proficient in using REST APIs to retrieve and manipulate data.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Overall, my combination of expertise in both Ruby on Rails and React allows me to create dynamic, full-featured web applications that provide a seamless user experience.
              </p>
              <Link href="/">
              <button className="bg-green-300 hover:bg-green-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Back to Home
              </button>
              </Link>
          </div>
      </div>

      </>
  );
}

export default AboutPage;

