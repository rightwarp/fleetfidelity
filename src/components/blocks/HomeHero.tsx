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
import Link from "next/link"
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
      <span className="text-xs font-semibold text-base-content md:text-sm">
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
  hasDivider,
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
      outerProps={{
        className: "overflow-hidden pb-0 pt-12 sm:pb-0 lg:pt-24",
      }}
      hasDivider={hasDivider}
      isCollapsed
    >
      <div className="mb-8 text-center md:mb-12">
        <TinaMarkdown
          content={heading}
          components={HomeHeroHeadingMarkdownComponents}
        />
        <div className="flex flex-col flex-wrap items-center gap-4 md:flex-row md:justify-center md:gap-8">
          {actions.map((action) => {
            const href = action.href || getRoute(action.pageRef?._sys.filename)
            const Tag = action.href ? "a" : Link

            return (
              <Tag
                key={action.label}
                href={href}
                className="btn btn-primary flex-shrink md:btn-lg"
              >
                {action.label}
              </Tag>
            )
          })}
        </div>
      </div>
      <ul className="mx-auto mb-6 grid grid-cols-2 gap-4 sm:mb-0 sm:max-w-[75%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] 2xl:max-w-[40%]">
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
          className="absolute -top-96 -z-10 hidden opacity-75 sm:-top-16 sm:left-0 sm:block"
          aria-hidden="true"
        >
          <HeroIconsLeft />
        </div>
        <div
          className="absolute -top-96 -z-10 hidden opacity-75 sm:-top-16 sm:right-0 sm:block"
          aria-hidden="true"
        >
          <HeroIconsRight />
        </div>
        <div className="relative h-44 sm:h-72 sm:px-12 sm:pt-8 md:h-80 md:px-12 lg:h-96 lg:px-28 xl:h-[36rem]">
          <div
            className="flex justify-end gap-2 rounded-t-md border-2 border-base-300 bg-base-200 p-2"
            aria-hidden="true"
          >
            <div className="size-3 rounded-full bg-gray-400"></div>
            <div className="size-3 rounded-full bg-gray-400"></div>
            <div className="size-3 rounded-full bg-gray-400"></div>
          </div>
          <div className="relative border-b-2 border-l-2 border-r-2 border-base-300 bg-base-200 p-0 sm:block">
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
