"use client"

import Autoplay from "embla-carousel-autoplay"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

export function CarouselWithIndicators() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const images = [
    {
      main: "/images/gos1.webp",
      left: "/images/gos3.webp",
      right: "/images/gos2.webp",
    },
    {
      main: "/images/gos2.webp",
      left: "/images/gos1.webp",
      right: "/images/gos3.webp",
    },
    {
      main: "/images/gos3.webp",
      left: "/images/gos2.webp",
      right: "/images/gos1.webp",
    },
  ]

  return (
    <div className="hidden md:block mt-auto">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="h-[300px] items-center">
          {images.map((imageSet, index) => (
            <CarouselItem key={index} className="basis-full flex justify-center items-center">
              <div className="relative flex justify-center items-center w-full">
                {/* Left image - smaller and set back */}
                <div className="absolute transform scale-[0.65] -translate-x-[25%] z-10">
                  <Image
                    src={imageSet.left || "/placeholder.svg"}
                    alt={`Dashboard Preview ${index + 1}`}
                    width={400}
                    height={254}
                    className="rounded-md shadow-lg opacity-90"
                  />
                </div>

                {/* Center image - larger and prominent */}
                <div className="absolute z-20 shadow-xl">
                  <Image
                    src={imageSet.main || "/placeholder.svg"}
                    alt={`Dashboard Preview ${index + 1}`}
                    width={500}
                    height={318}
                    className="rounded-md"
                  />
                </div>

                {/* Right image - smaller and set back */}
                <div className="absolute transform scale-[0.65] translate-x-[25%] z-10">
                  <Image
                    src={imageSet.right || "/placeholder.svg"}
                    alt={`Dashboard Preview ${index + 1}`}
                    width={400}
                    height={254}
                    className="rounded-md shadow-lg opacity-90"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Custom Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50"}`}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

