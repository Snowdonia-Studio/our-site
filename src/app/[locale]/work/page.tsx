'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { motion } from 'framer-motion'
import OldeDutch from '../../images/oldDutch.jpeg'
import hungryBuffalo from '../../images/hungryBuffalo.jpg'
import millstone from '../../images/millstone.png'

export default function Work() {
  const t = useTranslations('')
  return (
    <section id="work">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
        <motion.h2
          className="mb-16 text-center text-7xl font-extrabold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Our Work
        </motion.h2>
        <div className="grid gap-8">
          <motion.div
            className="relative mx-auto mt-20 grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              className="h-64 w-full rounded-md border border-gray-200 object-cover"
              src={OldeDutch}
              alt="Olde Dutch restaurant image"
            />
            <div className="inset-0 flex flex-col gap-4">
              <div className="inset-0 flex flex-wrap justify-between gap-4">
                <a href="https://www.theoldedutchrestaurant.com/">
                  <h2 className="text-3xl font-bold">The Olde Dutch</h2>
                </a>
                <ul className="flex flex-wrap items-center gap-2">
                  <li className="pill whitespace-nowrap">Squarespace</li>
                  <li className="pill whitespace-nowrap">Brand Identity</li>
                  <li className="pill whitespace-nowrap">Site Creation</li>
                </ul>
              </div>
              <p className="mt-4 text-base">
                As a recently aquired brand, we were tasked with creating a modern, responsive
                website that would reflect the brand's heritage and appeal to a modern audience.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative mx-auto mt-20 grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              className="h-64 w-full rounded-md border border-gray-200 object-cover"
              src={hungryBuffalo}
              alt="Random image"
            />
            <div className="inset-0 flex flex-col gap-4">
              <div className="inset-0 flex flex-wrap justify-between gap-4">
                <a href="https://www.hungrybuffalo.com/">
                  <h2 className="text-3xl font-bold">Hungry Buffalo</h2>
                </a>
                <ul className="flex flex-wrap items-center gap-2">
                  <li className="pill whitespace-nowrap">Squarespace</li>
                  <li className="pill whitespace-nowrap">Brand Identity</li>
                  <li className="pill whitespace-nowrap">Site Creation</li>
                </ul>
              </div>
              <p className="mt-4 text-base">
                A new Squarespace website for a local restaurant was built with a focus on a modern,
                clean look and feel.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative mx-auto mt-20 grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              className="h-64 w-full rounded-md border border-gray-200 object-cover"
              src={millstone}
              alt="Random image"
            />
            <div className="inset-0 flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <a href="https://www.themillstonebbq.com/">
                  <h2 className="text-3xl font-bold">Millstone BBQ</h2>
                </a>
                <ul className="flex flex-wrap items-center gap-2">
                  <li className="pill whitespace-nowrap">Squarespace</li>
                  <li className="pill whitespace-nowrap">Refresh</li>
                </ul>
              </div>
              <p className="mt-4 text-base">
                As the client's first site on Squarespace they were looking for a refresh and a new
                look. We gave them a new look and a new website on the same platform.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
