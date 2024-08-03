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
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Work</h2>
            </div>
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h4 className="mb-4 tracking-tight font-extrabold text-gray-900 dark:text-white">coming soon</h4>
            </div>
      </div>
    </section>
  )
}
