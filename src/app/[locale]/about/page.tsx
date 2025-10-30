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
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet the team</h2>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <div>
                    <div className="inset-0 flex items-center justify-center">
                                <h2 className="text-white text-3xl font-bold">Jeremy Grice</h2>
                            </div>
                        <div className="relative mx-auto mt-20 group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
                        
                            <div className="absolute inset-0 bg-gray-900/90 rounded-full opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"></div>
                            <Image className="w-full h-full object-cover rounded-full" src={Jeremy} alt="Portrait image of Jeremy Grice" />
                            
                        </div>
                        <div className="max-w-xl mx-auto mt-4">
                            <p className="text-gray-700 dark:text-gray-300">
                                Jeremy Grice is an eCommerce engineering leader with deep agency experience delivering
                                Shopify and Salesforce Commerce Cloud (SFCC) solutions. He partners closely with clients
                                from discovery through launch, leading cross-functional teams to ship performant,
                                scalable storefronts and measurable outcomes. Jeremy’s focus spans solution design,
                                front-end engineering, and technical leadership across multi-brand and enterprise builds.
                            </p>
                            <div className="mt-3">
                                <a
                                    href="https://www.linkedin.com/in/jeremylgrice/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-900 underline hover:no-underline dark:text-white"
                                >
                                    LinkedIn
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="inset-0 flex items-center justify-center">
                            <h2 className="text-white text-3xl font-bold">Shannon Grice</h2>
                        </div>
                        <div className="relative mx-auto mt-20 group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
                            <div className="absolute inset-0 bg-gray-900/90 rounded-full opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"></div>
                            <Image className="w-full h-full object-cover rounded-full" src={Shannon} alt="Portrait image of Shannon Grice" />
                            
                        </div>
                        <div className="max-w-xl mx-auto mt-4">
                            <p className="text-gray-700 dark:text-gray-300">
                                Shannon Grice is an Engineering Manager at Red Van Workshop with 10+ years in agency
                                environments, leading Salesforce Commerce Cloud (SFCC) and Shopify engagements. She has
                                served as an SFCC Front-End Lead and Developer at Red Van Workshop and previously
                                contributed as an SFCC Developer at PixelMEDIA (now RafterOne) and as an eCommerce Web
                                Developer at PFS. Shannon partners with enterprise and mid-market brands to deliver
                                scalable storefronts, mentor cross-functional teams, and drive measurable client
                                outcomes across discovery, delivery, and ongoing optimization.
                            </p>
                            <div className="mt-3">
                                <a
                                    href="https://www.linkedin.com/in/shannonbgrice/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-900 underline hover:no-underline dark:text-white"
                                >
                                    LinkedIn
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
