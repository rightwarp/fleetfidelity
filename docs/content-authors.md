# Content Authors

These docs provide high level instructions and details for using Tina CMS. For FAQ and troubleshooting, refer to the [README](../README.md) for details.

[Looking for developer docs? ➡️](developers.md)

## CMS Concepts for editors

These concepts should be enough to enable any CMS author the ability to edit page content with relative ease.

### Editing basics

Editing the website brings a relatively painless experience thanks to Tina's features.

Useful things to know:

- `Global`, `Header`, and `Footer` collections contain fields that affect all pages on the site, given their persistence in either navigation, graphics, or fallback metadata values.
- Editing any given page provides visual editing. E.g., viewing a page in the admin panel will double-up with the real web page while you make edits.
- Saved changes are reflected immediately in your current viewing session. The live website will take a few minutes to reflect them, as all pages are statically regenerated on each save.

### Page blocks

All page content is structured as blocks (similar to other page builder tools like Webflow or Wordpress). The key difference however is that all blocks are pre-built, rather than WYSIWYG. This means their stylistic structure is predefined during development.

Each page block makes one or tow presumptions about its use, such as its color scheme, typographic hierarchy, and the like. This means most blocks will use an `h2` for their main heading and a `p` for subheading (with the exception of `Hero` blocks). Some data is structured into lists, including references to other collections, and all their content and assets are freely editable (such as icons).

Blocks, by their nature, are not reusable. So if you want to add a new CTA on a page, you will need to define its content at the time you add the block each time.

### Collection references

As mentioned in the previous sections, some blocks of the various pages rely on references to other collections (e.g., Pages, Resources, Testimonials, Team). Any time you want to modify these collections, note any references will automatically update with the change.

To re-iterate, deleting an actively used reference can inadvertently break a page. For instance, if you need to remove a testimonial from its collection, first remove the referenced item from any instances of the Testimonials block.

Similarly, to add a new reference, you can first add a new item to its respectively collection, then go to a corresponding page block that uses that reference to insert it. The intent of this model is to ensure no content is unintentionally automatically inserted on a given page when it's not desired.

## Managing metadata & SEO

You can edit page metadata from the `Global` collection in the admin panel. This includes SEO meta tags, icons, the default opengraph image, and Google Tags ID.

In addition to editing this data at the global level, you can edit it on a per-page. When viewing a page in the `Pages` collection, the same `SEO` and `Open Graph` fields will appear for you to edit. You should always have title, description, and keywords defined. The page will override the default values if they're given here.

## Pages

Under the Pages collection, you can freely add pages to the CMS. Take note of the file name when creating a new page (the bottom-most field).

**This should always be lowercase, dash-separated for consistency.** The `Title` field of a page is used to prefill this field. Double check it before saving.

If you save a bad file name, you can always:

- Delete the page, assuming it isn't referenced by another collection, and recreate it with a corrected file name.
- Edit the filename, again assuming it isn't referenced yet.

To add a page to visible navigation, go to `Header` or `Footer` collections and find the Navigation list. Add an item using the blue plus icon (top right) and set the page reference from the dropdown, along with the visible label.

Be careful where the new page is ordered in the list, as the header navigation will be ordered left to right, while the footer's navigation wraps left to right, top to bottom.

To remove a page, first go to the header or footer collections again and find the navigation item for the respective page. Click the trash icon to remove it. Ensure no links from other pages reference the soon-to-be-deleted page (such as call to actions). Then go to the Pages collection and delete the page.

If you delete a page and the site fails to update, there was probably a build error. See [troubleshooting](#troubleshooting) for details.
