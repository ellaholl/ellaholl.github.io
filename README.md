# Ella Holl portfolio

Posts are markdown files, one folder per section:

```
content/
  sections.json        section order and which side (work / personal) each belongs to
  _template.md         copy this to start a new post (files starting with _ are ignored)
  coding/  research/  design/        professional side
  photography/  art/  personal/      personal side
images/                put photos and artwork here
build.mjs              turns the markdown into the site
```

## Add a post
1. Copy `content/_template.md` into a section folder, e.g. `content/photography/my-post.md`.
2. Fill in the front matter and write the page under it.
3. Run `node build.mjs`, then commit and push. (The GitHub Action in `.github/workflows` runs the build for you when you push changes to `content/`.)

## Remove a post
Delete the file, or add `draft: true` to hide it. Rebuild.

## Front matter
| key | meaning |
| --- | --- |
| `title` | required |
| `date` | `YYYY-MM-DD`, newest first, also gives the Year |
| `tags` | comma separated, shown as #tags |
| `role`, `tools` | shown on the project page, optional |
| `cover` | image path like `images/cover.jpg`, or a CSS background such as a gradient. Leave out for an automatic color |
| `label` | big text over a gradient cover, optional |
| `labelcolor` | color for that text, optional |
| `height` | card height for gradient covers, 180 to 600 |
| `draft` | `true` hides the post |

The body supports `##` headings, **bold**, *italic*, `code`, links, images, lists, quotes and code blocks.

## Add a section
Create `content/<name>/` and add `{ "id": "<name>", "group": "work" }` (or `"personal"`) to `sections.json`.
