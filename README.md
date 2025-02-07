# Fleet Fidelity Documentation

Table of Contents

- Overview
- Content authors
  - CMS Concepts for editors
    - Editing basics
    - Page blocks
    - Collection references
  - Metadata & SEO
  - Pages
- Developers
  - Services
  - Robots & sitemap generation
  - How to add new page blocks
- Next JS documentations
- Troubleshooting

## Overview

This README details how to use the site, both as a developer and content manager.

For project hand-off notes, please reference that [here](https://docs.google.com/document/d/1qziXgp3qLGH4JZ7Jobqp_oc3lUSVIr8-MTvuGRxqh3I/edit?tab=t.0).

## Content authors

Content is powered by [Tina CMS](https://tina.io/).

Since the CMS drives all content on the website, it uses a few simple content paradigms that are worth knowing to effectively manage it.

The CMS admin panel is available at `<site_url>/admin` from either local development or production.

[View Content Author Docs ➡️](docs/content-authors.md)

## Developers

The website is a relatively simple static [Next JS](#next-js-documentation) app. It can build and deploy anywhere Next is supported (barring additional dev ops infra required by services like [Fly.io](https://fly.io/)). This will usually means serverless hosting, but doesn't need to be.

All CMS content is stored in markdown (`mdx`, specifically) and JSON in `src/content` and powered by [Tina CMS](https://tina.io).

[View Developer Docs ➡️](docs/developers.md)

### Deploy on Vercel or Netlify

The easiest way to deploy this app is using these two hosting providers. They provide built-in support for Next JS features. Others also exist, like Fly.io, but require extra developer setup.

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

### I'm trying to build the app locally and Tina is throwing GraphQL schema mismatch errors

This is common as Tina automatically references your schema from git remote on build. Fear not - so long as the app builds in development, you can push the changes to a remote branch so Tina can index your schema changes.

Once the changes are pushed, set your branch name to a local env variable called `NEXT_PUBLIC_TINA_BRANCH` and try again. If you continue to have a problem, you can force a reindex from the Tina Cloud dashboard.
