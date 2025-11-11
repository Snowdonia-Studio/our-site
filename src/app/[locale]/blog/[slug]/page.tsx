import { getBlogPost, getAllBlogPosts } from '@/src/data/blog-posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { locales } from '@/src/i18n'

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  const params = []
  
  for (const locale of locales) {
    for (const post of posts) {
      params.push({
        locale,
        slug: post.slug,
      })
    }
  }
  
  return params
}

interface BlogPostPageProps {
  params: {
    slug: string
    locale: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <Link
        href={`/${params.locale}/blog`}
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Back to Blog
      </Link>

      <header className="mb-12 mt-8">
        <h1 className="text-foreground mb-4 text-5xl font-extrabold md:text-6xl">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>By {post.author}</span>
          {post.tags && post.tags.length > 0 && (
            <>
              <span>•</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {post.content.split('\n').map((line, index) => {
          if (line.startsWith('# ')) {
            return (
              <h1 key={index} className="mb-4 mt-8 text-4xl font-bold">
                {line.replace('# ', '')}
              </h1>
            )
          }
          if (line.startsWith('## ')) {
            return (
              <h2 key={index} className="mb-3 mt-6 text-3xl font-semibold">
                {line.replace('## ', '')}
              </h2>
            )
          }
          if (line.startsWith('- ')) {
            return (
              <li key={index} className="ml-6">
                {line.replace('- ', '')}
              </li>
            )
          }
          if (line.trim() === '') {
            return <br key={index} />
          }
          if (line.match(/^\d+\./)) {
            return (
              <li key={index} className="ml-6">
                {line.replace(/^\d+\.\s*/, '')}
              </li>
            )
          }
          return (
            <p key={index} className="mb-4">
              {line}
            </p>
          )
        })}
      </div>
    </article>
  )
}
