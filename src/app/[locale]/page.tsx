import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Image from 'next/image'
import Slider from './components/Slider'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <>
      <section className="flex flex-col items-center justify-center py-24">
        <h1 className="text-center text-7xl font-extrabold leading-tight">
          <span className="bg-span-bg bg-clip-text text-transparent">
            Building Beautiful, Functional Websites That Drive Your Business Forward
          </span>
          <br />
          Custom Web Design & Development Solutions Tailored to Your Needs
        </h1>
        <div className="my-16 px-20 text-center text-2xl text-text-secondary dark:text-stone-100">
          Welcome to Snowdonia Studio, your partner in crafting seamless, user-friendly websites
          that elevate your brand and maximize online success. Whether you’re starting from scratch
          or looking to refresh your online presence, we combine creativity with technical expertise
          to deliver digital experiences that make an impact.
        </div>
      </section>
      <Slider
        items={[
          'Web Design',
          'Shopify',
          'Web Development',
          'E-Commerce',
          'Headless & Custom Builds',
          'Wordpress',
          'Platform Migrations',
          'Performance Optimization',
          'Ongoing Support',
          'Squarespace',
        ]}
        title="Service Offerings"
        slidesToShow={4}
        id="services"
      />
      <section className="mx-auto px-6 py-10 py-20">
        <div className="mx-auto px-6">
          <div className="flex flex-col gap-6">
            <div className="p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-foreground mb-2 text-4xl font-semibold">
                    We build websites that work as hard as you do.
                  </h3>
                  <p className="text-base text-text-secondary">
                    Your website shouldn’t just look good — it should perform. From sleek marketing
                    sites to high-converting online stores, we combine design, development, and
                    strategy to help your business grow online.
                  </p>
                </div>
                <div>
                  <p className="text-foreground mb-2 text-2xl font-semibold">What We Deliver:</p>
                  <ul className="list-inside list-disc space-y-1 text-base text-text-secondary">
                    <li>Bespoke, mobile-friendly designs that make your brand shine</li>
                    <li>Scalable builds using modern frameworks and best practices</li>
                    <li>SEO, performance, and accessibility baked in from day one</li>
                    <li>Seamless integrations with tools you already use</li>
                    <li>End-to-end support — from concept to continuous care</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto px-6 py-10 py-20">
        <div className="mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">Custom Web Design</h3>
              <p className="text-base text-text-secondary">
                Distinct, responsive designs that capture your brand and deliver an intuitive user
                experience.
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">E-Commerce Solutions</h3>
              <p className="text-base text-text-secondary">
                We turn online stores into revenue machines with strategy, design, and conversion
                optimization.
              </p>
              <p className="text-base text-text-secondary">
                Focus: Shopify, WooCommerce, checkout flow optimization, upsells
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">
                Headless & Custom Builds
              </h3>
              <p className="text-base text-text-secondary">
                Get performance, flexibility, and control with modern headless architectures.
              </p>
              <p className="text-base text-text-secondary">
                Focus: Shopify Hydrogen, Next.js, GraphQL, REST APIs
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">Platform Migrations</h3>
              <p className="text-base text-text-secondary">
                Seamless migrations from your old platform to something faster and more flexible —
                zero downtime, zero stress.
              </p>
              <p className="text-base text-text-secondary">
                Focus: WordPress → Shopify, Squarespace → custom build, data migration
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">
                Performance Optimization
              </h3>
              <p className="text-base text-text-secondary">
                Speed = sales. We fine-tune your site for lightning-fast load times and top SEO
                scores.
              </p>
              <p className="text-base text-text-secondary">
                Focus: Core Web Vitals, caching, compression, SEO readiness
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">Ongoing Support</h3>
              <p className="text-base text-text-secondary">
                We don’t just hand off a site — we help it grow. Continuous updates, new features,
                and performance monitoring.
              </p>
              <p className="text-base text-text-secondary">
                Focus: Maintenance plans, feature rollouts, content updates
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
