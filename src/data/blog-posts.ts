import { BlogPost } from '@/src/types/blog'

export const blogPosts: BlogPost[] = [
  {
    slug: 'shopify-theme-accelerator',
    title: 'Shopify Theme Accelerator',
    excerpt:
      "We've created a Shopify theme accelerator that allows us to quickly get your theme up and running.",
    content: `
# Shopify Theme Accelerator

We've created a Shopify theme accelerator that allows us to quickly get your theme up and running.

## What is it?

Our Shopify Theme Accelerator is a custom-built framework that streamlines the development process for Shopify themes. It includes best practices, optimized code patterns, and pre-built components that allow us to launch your store faster without sacrificing quality.

## Key Benefits

- **Faster Time to Market**: Launch your store weeks ahead of traditional development timelines
- **Best Practices Built-In**: SEO, performance, and accessibility from day one
- **Scalable Architecture**: Grow your store without technical limitations
- **Customizable**: Every theme is tailored to your brand and business needs

## Perfect For

- New stores looking to launch quickly
- Businesses migrating to Shopify
- Brands wanting a custom theme without the extended timeline

Contact us to learn more about how our accelerator can help your business.
    `,
    date: '2024-01-15',
    author: 'Shannon Grice',
    tags: ['Shopify', 'Development', 'E-Commerce'],
  },
  {
    slug: 'shopify-app-development',
    title: 'Shopify App Development',
    excerpt:
      "We've got something going behind the scenes that we're excited to share with you. Soon it will be easier than ever to have filters, sorting, and breadcrumbs.",
    content: `
# Shopify App Development

We've got something exciting in the works behind the scenes that we can't wait to share with you.

## What We're Building

We're developing a comprehensive Shopify app that brings enterprise-level features to stores of all sizes. Our app will include:

- **Advanced Filtering**: Dynamic product filters that adapt to your catalog
- **Smart Sorting**: Multiple sorting options that help customers find what they need
- **Breadcrumb Navigation**: SEO-friendly breadcrumbs for better UX and search rankings
- **Collection Enhancements**: Advanced collection management and display options

## Why It Matters

Most Shopify stores struggle with navigation as their catalog grows. Our app solves this by providing powerful, customizable navigation tools that scale with your business.

## Coming Soon

We're in the final stages of development and testing. Sign up for our newsletter or reach out to get early access when we launch.
    `,
    date: '2024-02-01',
    author: 'Jeremy Grice',
    tags: ['Shopify', 'Apps', 'E-Commerce'],
  },
  {
    slug: 'what-to-expect-shopify',
    title: 'What to Expect when Going onto Shopify',
    excerpt:
      'Shopify is a powerful platform, but it also comes with a lot of complexity if it is your first foray into ecommerce.',
    content: `
# What to Expect when Going onto Shopify

Shopify is a powerful platform, but it also comes with a lot of complexity if it is your first foray into ecommerce. We've put together this guide to help you understand what to expect.

## The Planning Phase

Before you even start building, you'll need to:

- Define your product catalog structure
- Plan your collection organization
- Map out your navigation
- Determine your shipping zones and rates
- Set up payment providers

## The Build Phase

Once planning is complete, development begins:

1. **Theme Setup**: Custom theme development or theme customization
2. **Content Migration**: Moving products, collections, and content
3. **App Integration**: Adding necessary apps for functionality
4. **Testing**: QA across devices and browsers

## The Launch Phase

Going live involves:

- Final QA and testing
- DNS changes
- SSL certificate setup
- Staff training
- Post-launch monitoring

## Timeline

A typical Shopify build takes 6-12 weeks depending on:

- Catalog size
- Custom feature requirements
- Number of integrations
- Content migration complexity

## Budget Considerations

Plan for costs including:

- Shopify monthly subscription
- Theme development
- App subscriptions
- Payment processing fees
- Marketing and photography

Ready to get started? Contact us for a detailed project estimate tailored to your needs.
    `,
    date: '2024-03-10',
    author: 'Shannon Grice',
    tags: ['Shopify', 'E-Commerce', 'Guide'],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
