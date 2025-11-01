'use client'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

interface SliderProps {
  items: string[]
  title?: string
  slidesToShow?: number
  id?: string
}

export default function Slider({ items, title, slidesToShow = 1, id }: SliderProps) {
  if (items.length === 0) return null

  return (
    <section id={id} className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-12">
      {title && (
        <h2 className="text-foreground mb-16 text-center text-7xl font-extrabold">{title}</h2>
      )}
      <div className="slider-container relative w-full overflow-hidden">
        <Splide
          options={{
            type: 'loop',
            drag: 'free',
            snap: true,
            perPage: slidesToShow,
            perMove: 1,
            gap: '3rem',
            arrows: false,
            pagination: false,
            autoplay: true,
            interval: 3000,
            pauseOnHover: false,
            pauseOnFocus: false,
            resetProgress: false,
            speed: 800,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            flickPower: 300,
            flickMaxPages: 2,
            waitForTransition: false,
            updateOnMove: true,
            trimSpace: false,
            focus: 'center',
            breakpoints: {
              1024: {
                perPage: Math.min(2, slidesToShow),
                gap: '2rem',
              },
              640: {
                perPage: 1,
                gap: '1.5rem',
              },
            },
          }}
          aria-label={title || 'Slider'}
        >
          {items.map((item, index) => (
            <SplideSlide key={index}>
              <div className="flex items-center justify-center text-center">
                <p className="text-foreground text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
                  {item}
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}
