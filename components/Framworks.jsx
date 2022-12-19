import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const features = [
  {
    name: 'Ruby on Rails',
    description:
      'I have built multiple projects using Ruby on Rails. I am also familiar with Ruby, Ruby Gems, Ruby on Rails, MVC, REST API, and SQL.',
    icon: GlobeAltIcon,
    image: '/ruby-programming-language-icon.svg',
    url: 'https://rubyonrails.org/',
  },
  {
    name: 'JS Frameworks',
    description:
      'I built multiple projects using, ReactJs, NextJs, etc. I am also familiar with Redux, Context API, REST API and GraphQL.',
    icon: ScaleIcon,
    image: '/react-js-icon.svg',
    url: 'https://rubyonrails.org/',
  },
  {
    name: 'Database Management',
    description:
      'I have worked with multiple databases like MySQL, PostgreSQL, MongoDB, etc. I am also familiar with SQL, NoSQL, and ORM.',
    icon: BoltIcon,
    image: '/postgresql-icon.svg',
    url: 'https://rubyonrails.org/',
  },
  {
    name: 'Front end Design',
    description:
      'familiar with most of the front-end design tools and coding framworks like figma, adobe xd, Css, Tailwind & Bootstrap.',
    icon: DevicePhoneMobileIcon,
    image: '/css-icon.svg',
    url: 'https://rubyonrails.org/',
  },
]

export default function Framworks() {
  return (
    <section className='flex justify-center items-center h-full flex-wrap gap-4'>
  <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div
      class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
        <h2 class="text-3xl font-bold sm:text-4xl">Framworks and Languages</h2>

        <p class="mt-4 text-gray-600">
          I have worked with multiple frameworks and languages. Here are some of the frameworks and languages I have worked with.
        </p>

        <a  
          class="mt-8 inline-flex items-center rounded border border-green-100 bg-green-200 px-8 py-3 text-dark hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="/get-started"
        >
          <span class="text-sm font-medium"> Get Started </span>

          <svg
            class="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-2">
        {features.map((feature) => (
        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href={feature.url}
          key={feature.name}
        >
          <Image src={feature.image} alt="" width={60} height={60} />

          <h2 class="mt-2 font-bold">{feature.name}</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            {feature.description}
          </p>
        </a>))}
      </div>
    </div>
  </div>
</section>

  )
}
