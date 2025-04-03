"use client"

import { useState } from "react"
import Image from "next/image"

export function MobileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

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
    <div className="w-full">
      <div className="relative h-[220px] flex justify-center items-center">
        {/* Left image - smaller and set back */}
        <div className="absolute transform scale-[0.65] -translate-x-[25%] z-10">
          <Image
            src={images[activeIndex].left || "/placeholder.svg"}
            alt="Dashboard Preview"
            width={280}
            height={178}
            className="rounded-md shadow-lg opacity-90"
            priority={true}
          />
        </div>

        {/* Center image - larger and prominent */}
        <div className="absolute z-20 shadow-xl">
          <Image
            src={images[activeIndex].main || "/placeholder.svg"}
            alt="Dashboard Preview"
            width={350}
            height={222}
            className="rounded-md"
            priority={true}
          />
        </div>

        {/* Right image - smaller and set back */}
        <div className="absolute transform scale-[0.65] translate-x-[25%] z-10">
          <Image
            src={images[activeIndex].right || "/placeholder.svg"}
            alt="Dashboard Preview"
            width={280}
            height={178}
            className="rounded-md shadow-lg opacity-90"
            priority={true}
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === activeIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

