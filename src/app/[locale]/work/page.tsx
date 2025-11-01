import { useTranslations } from 'next-intl'
import Image from 'next/image'
import OldeDutch from '../../icons/oldDutch.jpeg'
import hungryBuffalo from '../../icons/hungryBuffalo.jpg'

export default function Work() {
  const t = useTranslations('')
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Work
          </h2>
        </div>
        <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
          <div className="relative mx-auto mt-20 max-w-xl">
            <Image
              className="h-64 w-full rounded-md object-cover"
              src={OldeDutch}
              alt="Random image"
            />
            <div className="inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">The Olde Dutch</h2>
              <p className="text-base text-text-secondary dark:text-stone-100">
                A modern, responsive website for The Olde Dutch, a classic American restaurant.
              </p>
            </div>
          </div>
          <div className="relative mx-auto mt-20 max-w-xl">
            <Image
              className="h-64 w-full rounded-md object-cover"
              src={hungryBuffalo}
              alt="Random image"
            />

            <div className="inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Hungry Buffalo</h2>
              <p className="text-base text-text-secondary dark:text-stone-100">
                A modern, responsive website for Hungry Buffalo, a classic American restaurant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
