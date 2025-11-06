'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="fixed left-[50%] top-[20px] z-50 mx-auto flex w-[90%] max-w-screen-2xl -translate-x-1/2 transform flex-row items-center justify-between gap-4 rounded-full border bg-white p-5 shadow-md dark:border-stone-100 dark:bg-stone-800 dark:text-stone-100 md:w-fit md:gap-8">
        {/* Mobile Menu Button - Left */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* Logo - Center on mobile, left on desktop */}
        <Link lang={locale} href="/" className="flex-1 md:flex-initial">
          <div className="flex flex-row items-center justify-center md:justify-start">
            <strong className="select-none text-lg font-bold md:mx-2 md:text-2xl">
              Snowdonia Studio
            </strong>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-row items-center gap-3 md:flex">
          <nav className="inline-flex gap-8">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact" className="contact-link">
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
            </a>
          </nav>
        </div>

        {/* Contact Icon - Right on mobile */}
        <a href="#contact" className="contact-link md:hidden">
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
        </a>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed left-[50%] top-[90px] z-40 mt-8 w-[90%] max-w-screen-2xl -translate-x-1/2 transform rounded-2xl border bg-white p-6 shadow-lg dark:border-stone-100 dark:bg-stone-800 md:hidden">
          <nav className="flex flex-col gap-4">
            <a
              href="#services"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="link-underline">Services</span>
            </a>
            <a
              href="#work"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="link-underline">Work</span>
            </a>
            <a
              href="#about"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="link-underline">About</span>
            </a>
            <a
              href="#contact"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="link-underline">Contact</span>
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
