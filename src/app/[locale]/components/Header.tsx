'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import Image from 'next/image'
import GithubIcon from '../../icons/github'
// import LogoIcon from '../../icons/logo'
import mountainIcon from '../../icons/mountain.png'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className="fixed left-[50%] top-[20px] z-50 mx-auto flex max-w-screen-2xl -translate-x-1/2 transform flex-row items-center justify-between gap-8 rounded-full border bg-white p-5 shadow-md dark:border-stone-100 dark:bg-stone-800 dark:text-stone-100">
      <Link lang={locale} href="/">
        <div className="flex flex-row items-center">
          <strong className="mx-2 select-none text-2xl font-bold">Snowdonia Studio</strong>
        </div>
      </Link>
      <div className="flex flex-row items-center gap-3">
        <nav className="inline-flex gap-8">
          <a href="#services">Services</a>
          <Link href={'/work'}>Work</Link>
          <Link lang={locale} href={`/about`}>
            About
          </Link>
          <Link href={'/contact'} className="contact-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  )
}
