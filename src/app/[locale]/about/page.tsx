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
            <div className="max-w-sm overflow-hidden shadow-lg text-center">
                <Image
                    className="w-full h-auto rounded-t"
                    src={Jeremy}
                    alt="Photo of Jeremy"
                />
                <div className="px-6 py-4 dark:bg-gray-800 rounded-b">
                    <div className="font-bold text-xl mb-2 dark:text-white">Jeremy Grice</div>
                    <p className="text-gray-700 text-base dark:text-gray-400">
                    Co-Founder & Developer
                    </p>
                </div>
            </div>
            <div className="max-w-sm overflow-hidden shadow-lg text-center">
                <Image
                    className="w-full h-auto rounded-t"
                    src={Shannon}
                    alt="Photo of Shannon"
                />
                <div className="px-6 py-4 dark:bg-gray-800 rounded-b">
                    <div className="font-bold text-xl mb-2 dark:text-white">Shannon Grice</div>
                    <p className="text-gray-700 text-base dark:text-gray-400">
                    Co-Founder & Developer
                    </p>
                </div>
            </div>
          </div>  
      </div>
    </section>
  )
}
