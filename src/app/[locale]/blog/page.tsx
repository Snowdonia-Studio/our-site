'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { getAllBlogPosts } from '@/src/data/blog-posts'

export default function Blog() {
  const t = useTranslations('')
  const params = useParams()
  const locale = params.locale as string
  const posts = getAllBlogPosts()

  return (
    <section id="blog">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
        <motion.h2
          className="text-foreground mb-16 text-center text-7xl font-extrabold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Our Thoughts
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <a href={`/${locale}/blog/${post.slug}`}>
                <div className="border-border group h-full rounded-lg border p-8 shadow-sm transition-shadow hover:shadow-lg">
                  <time className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="text-foreground mb-3 text-2xl font-semibold transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">{post.excerpt}</p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
