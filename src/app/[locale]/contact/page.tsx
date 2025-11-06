'use client'
import Button from '../components/Button'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Failed to send message')
      }
      setIsSent(true)
      if (typeof window !== 'undefined') {
        try {
          const url = new URL(window.location.href)
          url.hash = 'thank-you'
          window.history.replaceState(null, '', url.toString())
        } catch {
          window.location.hash = 'thank-you'
        }
      }
      form.reset()
    } catch (err: any) {
      setError(err?.message || 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact">
      <div className="mx-auto mt-20 max-w-screen-md px-4 py-20 ">
        <motion.h2
          className="text-foreground mb-16 text-center text-7xl font-extrabold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="mb-8 text-center font-light sm:text-xl lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Need a website built? Need some maintenance or updates? Drop us a line and well get back
          with you as soon as possible.
        </motion.p>
        {isSent ? (
          <div className="rounded-lg border border-green-300 bg-green-50 p-6 text-center dark:border-green-700 dark:bg-green-900/20">
            <h3 className="text-2xl font-semibold text-green-800 dark:text-green-200">
              Thank you!
            </h3>
            <p className="mt-2 text-green-700 dark:text-green-300">
              Your message has been sent. We&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
          <motion.form
            className="space-y-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-stone-900 dark:text-stone-300"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-stone-600 dark:bg-stone-700 dark:text-stone-100 dark:placeholder-stone-400"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-stone-900 dark:text-stone-300"
              >
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-stone-600 dark:bg-stone-700 dark:text-stone-100 dark:placeholder-stone-400"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-stone-900 dark:text-stone-300"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-stone-600 dark:bg-stone-700 dark:text-stone-100 dark:placeholder-stone-400"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-stone-900 dark:text-stone-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-stone-600 dark:bg-stone-700 dark:text-stone-100 dark:placeholder-stone-400"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            {error && <p className="text-center text-sm text-red-600 dark:text-red-400">{error}</p>}
            <div className="text-center">
              <Button
                size="large"
                className="rounded-lg dark:bg-stone-700"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Work With Us'}
              </Button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
