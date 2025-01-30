"use client"

import { PageQuery } from "@tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

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

  return (
    <div>
      <h1>{data.page?.title}</h1>
    </div>
  )
}
