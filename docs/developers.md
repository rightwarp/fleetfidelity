# Developers

These docs provide high level development guidance, including building with [Tina CMS](https://tina.io). For FAQ and troubleshooting, refer to the [README](../README.md) for details.

[Looking for content authoring docs? ➡️](content-authors.md)

## Local development

Environment variables are required to run the site locally. See [`.env.example`](../.env.example) for which are required.

You can view the local Tina admin panel by navigating to `https://localhost:3000/admin`.

## Services

Any services implemented will be noted here.

- **HubSpot:** Used on the contact page. A utility called [next-hubspot](https://github.com/snelsi/next-hubspot/tree/master) loads this script safely (see `src/vendor/hubspot` and `src/components/blocks/HubSpotForm`). Once it supports Next 15, it should be added as a dependency and these files removed.
- **Google Analytics:** Used for tracking (see `src/app/layout`).
- `next-sitemap`: Used to generate accurate `robots.txt` & `sitemap.xml` files.

## Robots & sitemap generation

To generate accurate robots & sitemaps, `next-sitemap` is used.

To handle these manually, go into `package.json` and edit the `postbuild` script name to something like `_postbuild` to remove it from the build. Then move both `sitemap.xml` and `robots.txt` from the `public` folder over to `src/app`.

To regenerate a sitemap, you can always run the designated script manually to compare.

## How to add new page blocks

Adding [new blocks](https://tina.io/docs/editing/blocks) is a straightforward process in local development, with components written with React and Tailwind.

Here is the order of operations:

- Go to the `tina/blocks` directory and add a new block file. See [Field API](https://tina.io/docs/reference/fields) for schema details. Be sure to include the shared `IsCollapsedField` as the first field, too.
- Import and add the new block to the `templates` array in the `Page` collection (`tina/schemas/page.ts`).
- To confirm it is set up correctly, go to the local admin panel (`https://localhost:3000/admin`) for any page your block should appear in the `Blocks` dropdown when adding the block. Make sure the fields behave as you expect.
- Next, go into the components (`app/components/blocks`) and add your block component. All blocks follow this basic structure:

  ```
  import { PageBlocksNewBlock } from "@tina/__generated__/types"
  import { Container } from "@/components/app/Container"

  const NewBlock = ({ isCollapsed }: PageBlocksNewBlock) => {
    return (
      <Container tag="section" isCollapsed={isCollapsed}>
        ...
      </Container>
    )
  }
  ```

- Finally, add your new block to the block renderer (`app/componenents/blocks/index.ts`) as part of its switch statement.

Now your block should render into the website when added.

**NOTE:** In general, when changing, adding, or updating field content in development, prefer to edit within the local CMS instance, and refrain from editing its data directly in `src/content` (unless you intend to fully delete an unused field or collection). Especially before deleting any collection content which may be [referenced](#collection-references) elsewhere in the CMS.

## Next JS documentation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deploy on Vercel or Netlify

The easiest way to deploy this app is using these two hosting providers. They provide built-in support for Next JS features. Others also exist, like Fly.io, but require extra developer setup.
