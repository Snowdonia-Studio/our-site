import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Jeremy from '../../icons/Jeremy.jpeg'
import Shannon from '../../icons/Shannon.jpeg'

export default function About() {
  const t = useTranslations('')
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet Our Team</h2>
          </div> 
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <Image
                      className="w-full h-64 rounded-lg sm:rounded-none sm:rounded-l-lg"
                      src={Jeremy}
                      alt="Site Logo"
                    />
                  </a>
                  <div className="p-5">
                      <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Jeremy</a>
                      </h3>
                      <span className="text-gray-500 dark:text-gray-400">Co-founder and Developer</span>
                  </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                  <Image
                      className="w-full h-64 rounded-lg sm:rounded-none sm:rounded-l-lg"
                      src={Shannon}
                      alt="Site Logo"
                    />
                  </a>
                  <div className="p-5">
                      <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Shannon</a>
                      </h3>
                      <span className="text-gray-500 dark:text-gray-400">Co-founder & Full Stack Developer</span>
                  </div>
              </div>
          </div>  
      </div>
    </section>
  )
}
