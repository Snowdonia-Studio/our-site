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
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
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
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>
            Meet The Team
          </Link>
          <Link href={'/contact'}>Contact Us</Link>
          <a href=''>Our Work</a>
        </nav>
      </div>
    </div>
  )
}
