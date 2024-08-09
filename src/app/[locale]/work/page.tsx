import { useTranslations } from 'next-intl'
import Image from 'next/image'
import OldeDutch from '../../icons/oldDutch.jpeg'
import hungryBuffalo from '../../icons/hungryBuffalo.jpg'

export default function Work() {
    const t = useTranslations('')
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What we've done</h2>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <div className="relative max-w-xl mx-auto mt-20">
                        <Image className="h-64 w-full object-cover rounded-md" src={OldeDutch} alt="Random image" />
                        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-3xl font-bold">The Olde Dutch</h2>
                        </div>
                    </div>
                    <div className="relative max-w-xl mx-auto mt-20">
                        <Image className="h-64 w-full object-cover rounded-md" src={hungryBuffalo} alt="Random image" />
                        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-3xl font-bold">Hungry Buffalo</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
