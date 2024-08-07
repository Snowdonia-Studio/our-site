import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          <span className='bg-span-bg bg-clip-text text-transparent'>
            Lorem Ipsum
          </span>
          <br />
          Lorem Ipsum Lorem Ipsum
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
            Lorem Ipsum Lorem Ipsum
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href=''
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              Work With Us
            </Button>
          </a>
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>Lorem Ipsum</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
            Lorem Ipsum Lorem Ipsum 
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>Lorem Ipsum</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
            Lorem Ipsum Lorem Ipsum
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>Lorem Ipsum</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
            Lorem Ipsum Lorem Ipsum
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
