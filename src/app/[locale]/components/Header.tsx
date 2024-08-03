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
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link lang={locale} href='/'>
            <div className='flex flex-row items-center'>
              <div className='mb-2 h-14 w-14'>
                <Image
                  src={mountainIcon}
                  alt="Site Logo"
                />
              </div>
              <strong className='mx-2 select-none'>Snowdonia Studio</strong>
            </div>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href={`/about`}>Meet The Team</Link>
              </li>
              <li>
                <Link href={'/contact'}>Contact Us</Link>
              </li>
              <li>
                <Link href={'/work'}>Our Work</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
  )
}
