import {
  PageBlocksTestimonials,
  Testimonial as TestimonialType,
} from "@tina/__generated__/types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { cn } from "@/utils/helpers"

import { Container } from "../app/Container"
import { HeadingMarkdownComponents } from "../app/MarkdownComponents"

interface Testimonial {
  testimonialRef: TestimonialType
}

interface TestimonialContentProps extends Testimonial {
  isHidden?: boolean
}

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

const TestimonialContent = ({
  testimonialRef: { portrait, name, title, quote },
  isHidden,
}: TestimonialContentProps) => {
  return (
    <div
      className={cn("mx-auto flex max-w-[50rem] flex-col items-center gap-6", {
        invisible: isHidden,
      })}
      aria-hidden={isHidden ? true : undefined}
    >
      <blockquote className="text-center text-lg italic md:text-xl">
        {quote}
      </blockquote>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        {portrait && (
          <div className="avatar">
            <div className="w=24 mask mask-squircle">
              <Image
                src={portrait.src}
                alt={portrait.alt || name || ""}
                width={48}
                height={48}
              />
            </div>
          </div>
        )}
        <div className="text-center sm:text-start">
          <h3 className="text-base font-bold">{name}</h3>
          <p className="text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}

const Testimonial = (props: Testimonial) => {
  return (
    <motion.div
      className="absolute inset-0"
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <TestimonialContent {...props} />
    </motion.div>
  )
}

export const Testimonials = ({
  heading,
  testimonials,
  transitionDelay: _transitionDelay = 5,
  isHidden,
}: PageBlocksTestimonials) => {
  const [page, setPage] = useState<number>(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const transitionDelay = _transitionDelay ? _transitionDelay * 1000 : 5000

  const createInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setPage((page) => (page + 1) % testimonials!.length)
    }, transitionDelay)
  }, [testimonials, transitionDelay])

  useEffect(() => {
    if (!intervalRef.current) {
      createInterval()
    }

    return () => {
      if (!intervalRef.current) return

      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [testimonials, transitionDelay, createInterval])

  const resetInterval = useCallback(() => {
    if (!intervalRef.current) return

    clearInterval(intervalRef.current)
    createInterval()
  }, [intervalRef, createInterval])

  const handleNextClick = useCallback(() => {
    if (!testimonials?.length) return

    setPage((page) => (page + 1) % testimonials!.length)
    resetInterval()
  }, [resetInterval, testimonials])

  const handlePrevClick = useCallback(() => {
    if (!testimonials?.length) return

    setPage((page) => (page - 1 + testimonials!.length) % testimonials!.length)
    resetInterval()
  }, [resetInterval, testimonials])

  if (isHidden || !testimonials?.length) return null

  return (
    <Container
      tag="section"
      outerProps={{
        className: cn("bg-base-200"),
      }}
    >
      <div className="text-center">
        <TinaMarkdown
          content={heading}
          components={HeadingMarkdownComponents}
        />
      </div>
      <div className="relative mb-6">
        <AnimatePresence>
          {testimonials[page] && (
            <Testimonial key={page} {...testimonials[page]} />
          )}
          {/* hidden copy of the testimonial to ensure the right size is used for the container */}
          {testimonials[page] && (
            <TestimonialContent {...testimonials[page]} isHidden />
          )}
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrevClick}
          className="btn btn-circle btn-ghost"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNextClick}
          className="btn btn-circle btn-ghost"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </Container>
  )
}
