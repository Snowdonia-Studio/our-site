'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

interface Props {
  locale: string
}

export const Footer: FC<Props> = ({ locale }) => {
  const t = useTranslations('')

  return (
    <footer className="mx-auto max-w-screen-2xl border-t px-4 py-8">
      <div className="flex flex-row items-center justify-between">
        <ul>
          <li>
            <a
              className="inline-flex items-center gap-2 hover:underline"
              href="https://www.linkedin.com/company/snowdonia-studio/"
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
          </li>
        </ul>
        <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <li>
            <a className="inline-flex items-center gap-2" href={`/${locale}/contact`}>
              <span className="link-underline">Contact Us</span>
            </a>
          </li>
          {/* <li>
            <a className="inline-flex items-center gap-2" href={`/${locale}/privacy`}>
              <span className="link-underline">Privacy Policy</span>
            </a>
          </li>
          <li>
            <a className="inline-flex items-center gap-2" href={`/${locale}/terms`}>
              <span className="link-underline">Terms of Service</span>
            </a>
          </li> */}
        </ul>
      </div>
      <p className="pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Snowdonia Studio. All rights reserved.
      </p>
    </footer>
  )
}
