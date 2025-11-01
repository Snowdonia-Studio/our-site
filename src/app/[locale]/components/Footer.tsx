export const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-2xl border-t px-4 py-8">
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
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Snowdonia Studio. All rights reserved.
      </p>
    </footer>
  )
}
