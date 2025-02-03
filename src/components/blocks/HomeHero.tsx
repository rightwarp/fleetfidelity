import {
  PageBlocksHomeHero,
  PageBlocksHomeHeroImages,
} from "@tina/__generated__/types"
import {
  LayoutDashboard,
  UserCog,
  ListChecks,
  ShieldCheck,
  Truck,
  CircleCheck,
  Settings,
  ChartNetwork,
  LucideIcon,
} from "lucide-react"
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import HeroIconsLeft from "@/app/_assets/hero-icons-wide-left.svg"
import HeroIconsRight from "@/app/_assets/hero-icons-wide-right.svg"
import { getRoute } from "@/utils/helpers"

import { Container } from "../app/Container"
import { HomeHeroHeadingMarkdownComponents } from "../app/MarkdownComponents"

const icons: Record<string, LucideIcon> = {
  LayoutDashboard,
  UserCog,
  ListChecks,
  ShieldCheck,
  Truck,
  CircleCheck,
  Settings,
  ChartNetwork,
}

const variants = {
  enter: {
    x: 25,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: -25,
    opacity: 0,
  },
}

const AnimatedProductImage = ({ src, alt }: PageBlocksHomeHeroImages) => {
  return (
    <motion.div
      className="absolute size-full"
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <Image src={src} alt={alt} fill className="z-10" />
    </motion.div>
  )
}

const FeatureChip = ({ icon, label }: { icon: string; label: string }) => {
  const Icon = icons[icon]

  return (
    <div className="flex items-center gap-2 rounded-lg border border-base-300 bg-base-100 p-2 md:p-4">
      <Icon className="size-4 text-green-600 md:size-5" />
      <span className="text-xs font-semibold text-green-800 md:text-sm">
        {label}
      </span>
    </div>
  )
}

export const HomeHero = ({
  heading,
  actions,
  images,
  features,
}: PageBlocksHomeHero) => {
  const [productImage, setProductImage] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProductImage((image) => (image + 1) % images!.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [images])

  return (
    <Container
      tag="section"
      className="pb-12 pt-12 sm:overflow-hidden sm:pb-0 lg:pt-24"
      isCollapsed
    >
      <div className="mb-12 flex flex-col gap-5 text-center md:gap-8">
        <TinaMarkdown
          content={heading}
          components={HomeHeroHeadingMarkdownComponents}
        />
        <div className="flex justify-center gap-4 lg:gap-6">
          {actions.map((action) => {
            const href = action.href || getRoute(action.pageRef?._sys.filename)

            return (
              <a
                key={action.label}
                href={href}
                className="btn btn-primary flex-shrink lg:btn-lg"
              >
                {action.label}
              </a>
            )
          })}
        </div>
      </div>
      <ul className="mx-auto mb-4 grid grid-cols-2 gap-4 sm:max-w-[75%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] 2xl:max-w-[40%]">
        {features.map((feature) => {
          return (
            <li key={feature.label}>
              <FeatureChip {...feature} />
            </li>
          )
        })}
      </ul>
      <div className="relative">
        <div
          className="absolute -right-48 -top-4 -z-10 opacity-75 sm:-top-8 sm:left-0 sm:right-[unset]"
          aria-hidden="true"
        >
          <HeroIconsLeft />
        </div>
        <div
          className="absolute -left-48 -top-4 -z-10 opacity-75 sm:-top-8 sm:left-[unset] sm:right-0"
          aria-hidden="true"
        >
          <HeroIconsRight />
        </div>
        <div className="relative pt-12 sm:h-72 sm:px-12 md:h-80 md:px-12 lg:h-96 lg:px-28 xl:h-[38rem]">
          <div
            className="hidden justify-end gap-2 rounded-t-md border-2 border-base-300 bg-base-200 p-2 sm:flex"
            aria-hidden="true"
          >
            <div className="size-3 rounded-full bg-gray-400"></div>
            <div className="size-3 rounded-full bg-gray-400"></div>
            <div className="size-3 rounded-full bg-gray-400"></div>
          </div>
          <div className="relative hidden border-b-2 border-l-2 border-r-2 border-base-300 bg-base-200 p-0 sm:block">
            <AnimatePresence>
              {images[productImage] && (
                <AnimatedProductImage
                  key={productImage}
                  {...images[productImage]}
                />
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[productImage].src}
                alt={images[productImage].alt}
                className="invisible"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Container>
  )
}
