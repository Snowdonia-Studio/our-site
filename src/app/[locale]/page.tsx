import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Slider from './components/Slider'
import Jeremy from '../icons/Jeremy.jpeg'
import Shannon from '../icons/Shannon.jpeg'
import OldeDutch from '../icons/oldDutch.jpeg'
import hungryBuffalo from '../icons/hungryBuffalo.jpg'
import ContactUsPage from './contact/page'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <>
      <section className="flex flex-col items-center justify-center py-24">
        <h1 className="text-center text-7xl font-extrabold leading-tight">
          <span className="bg-span-bg bg-clip-text text-transparent">
            Building Beautiful, Functional Websites That Drive Your Business Forward
          </span>
          <br />
          Custom Web Design & Development Solutions Tailored to Your Needs
        </h1>
        <div className="my-16 px-20 text-center text-2xl text-text-secondary dark:text-stone-100">
          Welcome to Snowdonia Studio, your partner in crafting seamless, user-friendly websites
          that elevate your brand and maximize online success. Whether you’re starting from scratch
          or looking to refresh your online presence, we combine creativity with technical expertise
          to deliver digital experiences that make an impact.
        </div>
      </section>
      <Slider
        items={[
          'Web Design',
          'Shopify',
          'Web Development',
          'E-Commerce',
          'Headless & Custom Builds',
          'Wordpress',
          'Platform Migrations',
          'Performance Optimization',
          'Ongoing Support',
          'Squarespace',
        ]}
        title="Service Offerings"
        slidesToShow={4}
        id="services"
      />
      <section className="mx-auto px-6 py-10 py-20">
        <div className="mx-auto px-6">
          <div className="flex flex-col gap-6">
            <div className="p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-foreground mb-2 text-4xl font-semibold">
                    We build websites that work as hard as you do.
                  </h3>
                  <p className="text-base text-text-secondary">
                    Your website shouldn’t just look good — it should perform. From sleek marketing
                    sites to high-converting online stores, we combine design, development, and
                    strategy to help your business grow online.
                  </p>
                </div>
                <div>
                  <p className="text-foreground mb-2 text-2xl font-semibold">What We Deliver:</p>
                  <ul className="list-inside list-disc space-y-1 text-base text-text-secondary">
                    <li>Bespoke, mobile-friendly designs that make your brand shine</li>
                    <li>Scalable builds using modern frameworks and best practices</li>
                    <li>SEO, performance, and accessibility baked in from day one</li>
                    <li>Seamless integrations with tools you already use</li>
                    <li>End-to-end support — from concept to continuous care</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto px-6 py-10 py-20">
        <div className="mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">Custom Web Design</h3>
              <p className="text-base text-text-secondary">
                Distinct, responsive designs that capture your brand and deliver an intuitive user
                experience.
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">E-Commerce Solutions</h3>
              <p className="text-base text-text-secondary">
                We turn online stores into revenue machines with strategy, design, and conversion
                optimization.
              </p>
              <p className="text-base text-text-secondary">
                Focus: Shopify, WooCommerce, checkout flow optimization, upsells
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">
                Headless & Custom Builds
              </h3>
              <p className="text-base text-text-secondary">
                Get performance, flexibility, and control with modern headless architectures.
              </p>
              <p className="text-base text-text-secondary">
                Focus: Shopify Hydrogen, Next.js, GraphQL, REST APIs
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">Platform Migrations</h3>
              <p className="text-base text-text-secondary">
                Seamless migrations from your old platform to something faster and more flexible —
                zero downtime, zero stress.
              </p>
              <p className="text-base text-text-secondary">
                Focus: WordPress → Shopify, Squarespace → custom build, data migration
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">
                Performance Optimization
              </h3>
              <p className="text-base text-text-secondary">
                Speed = sales. We fine-tune your site for lightning-fast load times and top SEO
                scores.
              </p>
              <p className="text-base text-text-secondary">
                Focus: Core Web Vitals, caching, compression, SEO readiness
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">Ongoing Support</h3>
              <p className="text-base text-text-secondary">
                We don’t just hand off a site — we help it grow. Continuous updates, new features,
                and performance monitoring.
              </p>
              <p className="text-base text-text-secondary">
                Focus: Maintenance plans, feature rollouts, content updates
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20" id="work">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
          <h2 className="text-foreground mb-16 text-center text-7xl font-extrabold">Our Work</h2>
          <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
            <div className="relative mx-auto mt-20 max-w-xl">
              <Image
                className="h-64 w-full rounded-md object-cover"
                src={OldeDutch}
                alt="Random image"
              />
              <div className="inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">The Olde Dutch</h3>
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
                <h3 className="text-3xl font-bold text-white">Hungry Buffalo</h3>
                <p className="text-base text-text-secondary dark:text-stone-100">
                  A modern, responsive website for Hungry Buffalo, a classic American restaurant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20" id="about">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
          <h2 className="text-foreground mb-16 text-center text-7xl font-extrabold">
            Meet the team
          </h2>
          <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
            <div>
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
                <p className="text-gray-700 dark:text-gray-300">
                  Jeremy is an eCommerce engineering leader with deep agency experience delivering
                  Shopify and Salesforce Commerce Cloud (SFCC) solutions. He partners closely with
                  clients from discovery through launch, leading cross-functional teams to ship
                  performant, scalable storefronts and measurable outcomes. Jeremy’s focus spans
                  solution design, front-end engineering, and technical leadership across
                  multi-brand and enterprise builds.
                </p>
                <div className="mt-3">
                  <a
                    href="https://www.linkedin.com/in/jeremylgrice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-900 underline hover:no-underline dark:text-white"
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
                    className="inline-flex items-center gap-2 text-gray-900 underline hover:no-underline dark:text-white"
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
                    className="inline-flex items-center gap-2 text-gray-900 underline hover:no-underline dark:text-white"
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
            </div>
            <div>
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
                <p className="text-gray-700 dark:text-gray-300">
                  Shannon has over 10 years of experience in agency environments, leading Salesforce
                  Commerce Cloud (SFCC) and Shopify engagements. She has served as an SFCC Front-End
                  Lead and Developer at Red Van Workshop and previously contributed as an SFCC
                  Developer at PixelMEDIA (now RafterOne) and as an eCommerce Web Developer at
                  PFSWeb. Shannon partners with enterprise and mid-market brands to deliver scalable
                  storefronts, mentor cross-functional teams, and drive measurable client outcomes
                  across discovery, delivery, and ongoing optimization.
                </p>
                <div className="mt-3">
                  <a
                    href="https://www.linkedin.com/in/shannonbgrice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-900 underline hover:no-underline dark:text-white"
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
                    className="inline-flex items-center gap-2 text-gray-900 underline hover:no-underline dark:text-white"
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
                    className="inline-flex items-center gap-2 text-gray-900 underline hover:no-underline dark:text-white"
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
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20" id="contact">
        <ContactUsPage />
      </section>
    </>
  )
}
