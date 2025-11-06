'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Jeremy from '../../images/Jeremy.jpeg'
import Shannon from '../../images/Shannon.jpeg'

export default function About() {
  const t = useTranslations('')
  return (
    <section id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
        <motion.h2
          className="text-foreground mb-8 text-center text-7xl font-extrabold md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Meet the team
        </motion.h2>
        <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inset-0 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">Jeremy Grice</h3>
            </div>
            <div className="group relative mx-auto mt-20 h-40 w-40 overflow-hidden rounded-full sm:h-48 sm:w-48 md:h-56 md:w-56">
              <Image
                className="h-full w-full rounded-full object-cover"
                src={Jeremy}
                alt="Portrait image of Jeremy Grice"
              />
            </div>
            <div className="mx-auto mt-4 max-w-xl">
              <p className="text-base text-gray-700 dark:text-gray-300">
                Jeremy is an eCommerce engineering leader with deep agency experience delivering
                Shopify and Salesforce Commerce Cloud (SFCC) solutions. He partners closely with
                clients from discovery through launch, leading cross-functional teams to ship
                performant, scalable storefronts and measurable outcomes. Jeremy’s focus spans
                solution design, front-end engineering, and technical leadership across multi-brand
                and enterprise builds.
              </p>
              <div className="mt-3">
                <a
                  href="https://www.linkedin.com/in/jeremylgrice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-900 hover:underline dark:text-white"
                >
                  LinkedIn
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="https://vetthatcodes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-900 hover:underline dark:text-white"
                >
                  Personal Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="https://github.com/jeremylgrice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-900 hover:underline dark:text-white"
                >
                  GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inset-0 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">Shannon Grice</h3>
            </div>
            <div className="group relative mx-auto mt-20 h-40 w-40 overflow-hidden rounded-full sm:h-48 sm:w-48 md:h-56 md:w-56">
              <Image
                className="h-full w-full rounded-full object-cover"
                src={Shannon}
                alt="Portrait image of Shannon Grice"
              />
            </div>
            <div className="mx-auto mt-4 max-w-xl">
              <p className="text-base text-gray-700 dark:text-gray-300">
                Shannon has over 10 years of experience in agency environments, leading Salesforce
                Commerce Cloud (SFCC) and Shopify engagements. She has served as an SFCC Front-End
                Lead and Developer at Red Van Workshop and previously contributed as an SFCC
                Developer at PixelMEDIA (now RafterOne) and as an eCommerce Web Developer at PFSWeb.
                Shannon partners with enterprise and mid-market brands to deliver scalable
                storefronts, mentor cross-functional teams, and drive measurable client outcomes
                across discovery, delivery, and ongoing optimization.
              </p>
              <div className="mt-3">
                <a
                  href="https://www.linkedin.com/in/shannonbgrice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-900 hover:underline dark:text-white"
                >
                  LinkedIn
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="https://www.shannongrice.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-900 hover:underline dark:text-white"
                >
                  Personal Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="https://github.com/snowdoniadarkness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-900 hover:underline dark:text-white"
                >
                  GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
