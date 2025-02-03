import {
  PageBlocksHomeHero,
  PageBlocksHomeHeroImages,
} from "@tina/__generated__/types"
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import HeroIconsLeft from "@/app/_assets/hero-icons-wide-left.svg"
import HeroIconsRight from "@/app/_assets/hero-icons-wide-right.svg"

import { Container } from "../app/Container"
import { HomeHeroHeadingMarkdownComponents } from "../app/MarkdownComponents"

const variants = {
  enter: {
    x: 100,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: -100,
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
      <Image src={src} alt={alt} fill />
    </motion.div>
  )
}

export const HomeHero = ({ heading, actions, images }: PageBlocksHomeHero) => {
  const [productImage, setProductImage] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProductImage((image) => (image + 1) % images!.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [images])

  return (
    <Container tag="section">
      <div className="flex flex-col gap-5 text-center md:gap-8">
        <TinaMarkdown
          content={heading}
          components={HomeHeroHeadingMarkdownComponents}
        />
        <div className="flex justify-center gap-4 lg:gap-6">
          {actions.map((action) => {
            return (
              <a
                key={action.label}
                href={action.href!}
                className="btn btn-primary flex-shrink lg:btn-lg"
              >
                {action.label}
              </a>
            )
          })}
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute -right-48 -top-[100px] -z-10 sm:-top-8 sm:left-0 sm:right-[unset]"
          aria-hidden="true"
        >
          <HeroIconsLeft />
        </div>
        <div
          className="absolute -left-48 -top-[100px] -z-10 sm:-top-8 sm:left-[unset] sm:right-0"
          aria-hidden="true"
        >
          <HeroIconsRight />
        </div>
        <div className="relative hidden px-5 pt-12 sm:block md:px-24">
          <div
            className="flex justify-end gap-2 rounded-t-md border-2 border-base-300 bg-base-200 p-2"
            aria-hidden="true"
          >
            <div className="size-3 rounded-full bg-gray-400"></div>
            <div className="size-3 rounded-full bg-gray-400"></div>
            <div className="size-3 rounded-full bg-gray-400"></div>
          </div>
          <div className="relative border-b-2 border-l-2 border-r-2 border-base-300 p-0">
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
