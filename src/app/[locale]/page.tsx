import { useTranslations } from 'next-intl'
import Slider from './components/Slider'
import AnimatedSection from './components/AnimatedSection'
import ContactUsPage from './contact/page'
import WorkPage from './work/page'
import AboutPage from './about/page'
import BlogPage from './blog/page'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <>
      <section className="relative flex flex-col items-center justify-center md:py-20">
        <div className="relative z-10 pt-20 pt-40 md:mt-20">
          <h1 className="text-center text-5xl font-extrabold leading-tight text-white md:text-7xl">
            <span className="bg-span-bg bg-clip-text text-transparent">
              Building Beautiful, Functional Websites That Drive Your Business Forward
            </span>
            <br />
            Custom Web Design & Development Solutions Tailored to Your Needs
          </h1>
          <div className="my-16 px-20 text-center text-2xl text-white">
            Welcome to Snowdonia Studio, your partner in crafting seamless, user-friendly websites
            that elevate your brand and maximize online success. Whether you're starting from
            scratch or looking to refresh your online presence, we combine creativity with technical
            expertise to deliver digital experiences that make an impact.
          </div>
        </div>
      </section>
      <Slider
        items={[
          'Design',
          'Shopify',
          'Development',
          'E-Commerce',
          'Custom Builds',
          'Wordpress',
          'Migrations',
          'Optimization',
          'Support',
          'Squarespace',
        ]}
        title="Service Offerings"
        slidesToShow={4}
        id="services"
      />
      <AnimatedSection className="mx-auto px-6 py-10">
        <div className="mx-auto px-6">
          <div className="flex flex-col gap-6">
            <div className="p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-foreground mb-2 text-4xl font-semibold">
                    We build websites that work as hard as you do.
                  </h3>
                  <p className="text-base">
                    Your website shouldn't just look good — it should perform. From sleek marketing
                    sites to high-converting online stores, we combine design, development, and
                    strategy to help your business grow online.
                  </p>
                </div>
                <div>
                  <p className="text-foreground mb-2 text-2xl font-semibold">What We Deliver:</p>
                  <ul className="list-inside list-disc space-y-1 text-base">
                    <li>Bespoke, mobile-friendly designs that make your brand shine</li>
                    <li>
                      Custom Shopify apps to streamline your business operations and enhance your
                      online store
                    </li>
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
      </AnimatedSection>
      <AnimatedSection className="mx-auto px-6 py-10 py-20" delay={0.2}>
        <div className="mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">Custom Web Design</h3>
              <p className="text-base">
                Distinct, responsive designs that capture your brand and deliver an intuitive user
                experience.
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">E-Commerce Solutions</h3>
              <p className="text-base">
                We turn online stores into revenue machines with strategy, design, and conversion
                optimization.
              </p>
              <p className="text-base">
                Focus: Shopify, WooCommerce, checkout flow optimization, upsells
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">
                Headless & Custom Builds
              </h3>
              <p className="text-base">
                Get performance, flexibility, and control with modern headless architectures.
              </p>
              <p className="text-base">Focus: Shopify Hydrogen, Next.js, GraphQL, REST APIs</p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">Platform Migrations</h3>
              <p className="text-base">
                Seamless migrations from your old platform to something faster and more flexible —
                zero downtime, zero stress.
              </p>
              <p className="text-base">
                Focus: WordPress → Shopify, Squarespace → custom build, data migration
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">
                Performance Optimization
              </h3>
              <p className="text-base">
                Speed = sales. We fine-tune your site for lightning-fast load times and top SEO
                scores.
              </p>
              <p className="text-base">
                Focus: Core Web Vitals, caching, compression, SEO readiness
              </p>
            </div>
            <div className="border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-foreground mb-2 text-4xl font-semibold">Ongoing Support</h3>
              <p className="text-base">
                We don’t just hand off a site — we help it grow. Continuous updates, new features,
                and performance monitoring.
              </p>
              <p className="text-base">
                Focus: Maintenance plans, feature rollouts, content updates
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <WorkPage />
      <AboutPage />
      <BlogPage />
      <ContactUsPage />
    </>
  )
}
