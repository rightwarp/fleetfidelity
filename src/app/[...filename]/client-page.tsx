"use client"

import { Page, PageQuery } from "@tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import { Blocks } from "@/components/blocks"

export interface ClientPageProps {
  data: {
    page: PageQuery["page"]
  }
  variables: {
    relativePath: string
  }
  query: string
}

export const ClientPage = (props: ClientPageProps) => {
  const { data } = useTina({ ...props })

  return <Blocks {...(data.page as Page)} />
}
