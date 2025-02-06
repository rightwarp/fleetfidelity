## Fleet Fidelity Documentation

### Overview

This README details how to use the site, both as a developer and content manager.

For specific hand off notes, please reference that [here](https://docs.google.com/document/d/1qziXgp3qLGH4JZ7Jobqp_oc3lUSVIr8-MTvuGRxqh3I/edit?tab=t.0).

### Content

Content is powered by [Tina CMS](https://tina.io/). All content files are stored in markdown (`mdx`, specifically) and JSON in `src/content`.

Since the CMS drives all content on the website, it uses a few simple content paradigms that are worth knowing to effectively manage it.

The CMS admin panel is available at `<site_url>/admin` from either local development or production.

#### Metadata & SEO

You can edit page metadata from the `Global` collection in the CMS panel. This includes SEO meta tags, icons, the default opengraph image, and Google Tags ID.

In addition to editing this data at the global level, you can edit it on a per-page. When viewing a page in the `Pages` collection, the same `SEO` and `Open Graph` fields will appear for you to edit. You should always have title, description, and keywords defined. The page will override the default values if they're given here.

#### Pages

Under the Pages collection, you can freely add pages to the CMS. Once you do, it is added to the site at a designated URL that matches the file name of the page (e.g., `about.mdx` -> `/about`). **This should always be lowercase, dash-separated for consistency.** The `Title` field of a page is used to prefill the filename. Always double check it before saving (if you save a bad file name, you can always delete it and try again).

To add a page to visible navigation, go to `Header` or `Footer` collections and find the Navigation list. Add an item using the blue plus icon (top right) and set the page reference from the dropdown, along with the visible label.

Be careful where the new page is ordered in the list, as the header navigation will be ordered left to right, while the footer's navigation wraps left to right, top to bottom.

To remove a page, first go to the header or footer collections again and find the navigation item for the respective page. Click the trash icon to remove it. Ensure no links from other pages reference the soon-to-be-deleted page (such as call to actions). Then go to the Pages collection and delete the page.

If you delete a page and the site fails to update, there was probably a build error. See [troubleshooting](#troubleshooting) for details.

#### Page blocks

All page content is structured as blocks (similar to other page builder tools like Webflow or Wordpress). The key difference however is that all blocks are pre-built, rather than WYSIWYG. This means their stylistic structure is predefined.

If you go to the `Pages` collection and click on a page, it will automatically open the website and CMS in a visual editor. Here you can edit text, reorder (or edit) blocks, and it will reflect immediately in the page preview. Once saved, it may take a few minutes for the changes to reflect in the live website as the pages will be rebuilt (and if a CDN/cache is used, it must be revalidated).

Each block makes one or tow presumptions about its use, such as its color scheme, typographic hierarchy, and the like. This means most blocks will use an `h2` for their main heading and a `p` for subheading (with the exception of `Hero` blocks). Some data is structured into lists, including references to other collections, and all their content and assets are freely editable (such as icons).

Blocks, by their nature, are not reusable. So if you want to add a new CTA on a page, you will need to define its content at the time you add the block each time.

#### References

As mentioned in the previous sections, some blocks of the various pages rely on references to other collections (e.g., Pages, Resources, Testimonials, Team). Any time you want to modify these collections, note any references will automatically update with the change.

To re-iterate, deleting an actively used reference can inadvertently break a page. For instance, if you need to remove a testimonial from its collection, first remove the referenced item from any instances of the Testimonials block.

Similarly, to add a new reference, you can first add a new item to its respectively collection, then go to a corresponding page block that uses that reference to insert it. The intent of this model is to ensure no content is unintentionally automatically inserted on a given page when it's not desired.

### Architecture

The website is a relatively simple static [Next JS](#next-js-documentation) app. It can build and deploy anywhere Next is supported (barring additional dev ops infra required by services like [Fly.io](https://fly.io/))

#### HubSopt form

HubSpot is used on the contact page. A utility called [next-hubspot](https://github.com/snelsi/next-hubspot/tree/master) lods this script safely. Since it doesn't support Next 15 yet, it is ported into the project directly (see `src/vendor`).

Once Next 15 is supported, these files can be removed and `next-hubspot` added as a dependency to the project.

#### Robots & Sitemap

To generate accurate robots & sitemaps directly, this is handled by `next-sitemap`.

To handle these manually, go into `package.json` and edit the `postbuild` script name to something like `_postbuild` to remove it from the build. Then move both `sitemap.xml` and `robots.txt` from the `public` folder over to `src/app`.

To regenerate a sitemap, you can always run the designated script manually to compare.

#### Adding new page blocks

Adding [new blocks](https://tina.io/docs/editing/blocks) is relatively simple. If you know how to use Node JS, React, and Tailwind, then you can add new blocks easily.

Here is an order of operations:

- Go to the `tina/blocks` directory and add a new block file. See [Field API](https://tina.io/docs/reference/fields) for schema details. Be sure to include the shared `IsCollapsedField` as the first field, too.
- Once the new block is ready, add it to the `templates` array in the Page collection (`tina/schemas/page.ts`).
- Now you can go into the specific page within the CMS and add your block to it. Make sure the fields behave as you expect.
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

Now your block should render into the website!

**Note:** In general, when refining a Tina field, edit field content within the local CMS instance (https://localhost:3000/admin), and refrain from editing its data directly in `src/content` (unless you intend to fully delete an unused field or collection). This can cause GraphQL mismatches in Tina, leading to gnarly bugs.

## Next JS Documentation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

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

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Troubleshooting

### My CMS edits won't appear on the live site, what do I do?

This likely means there's an error with the content of the site, blocking a successful build. Go to the deployment manager used for the site (Netlify will be used in this example). Find the list of published deploys for the project, and redeploy the last successful one. Once finished, you can try making edits again according to the [content instructions](#content) in this README.

### I added a page/testimonial/team member/etc and it isn't appearing on the site

Items added to collections, by default, won't be added to the site visually. Once added, go to a corresponding collection or block that can reference the new item and add it there (e.g., the header collection's navigation list references the Pages collection, the resources block references Resources collection, etc).

### The page isn't building even after redeploying a previous successful deploy

Something might be wrong with Netlify or perhaps a dependency was caught on a bad range version.

For bad redeploys, visit the services' [status page](https://www.netlifystatus.com/) to see if there is active downtime. If there is, you might need to wait.

For bad builds as a result of a dependency, check that all dependencies (dev or otherwise) are [pinned](https://maxleiter.com/blog/pin-dependencies).

### How do I keep my website up to date?

All websites, no matter where they are hosted, need regular maintenance. Right Warp is available to perform these operations at a small fee based on a quarterly cadence. Reach out if you'd like this service.

If you have developers able to manage this for you, I recommend installing [renovatebot](https://docs.renovatebot.com/) in the repository to automatically scan for out of date dependencies and recommend updates.
