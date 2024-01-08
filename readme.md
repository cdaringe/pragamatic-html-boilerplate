# pragmatic-html-boilerplate

[demo site](https://cdaringe.github.io/pragamatic-html-boilerplate/).

Tired of making the same crappy HTML + CSS for every page.

Give a working recipe of **efficient HTML and CSS** for a page(s) with:

- header
  - (optional) title
  - (optional) search
  - (optional) avatar
  - (optional) responsive nav
- body
- footer
- max page width

I change my tech stack every 10 days. The HTML and CSS should have a sane, stable target.

## Usage

- `pnpm install`
- `pnpm start`

## What are the guts of the implementation?

- HTML
- [tailwindcss](https://tailwindcss.com/), but delivered via the handy [unocss](https://unocss.dev/guide/) compiler, so we get _just_ what you need.
  - **More styles would need a unique unocss or tailwindcss setup**.
- CSS reset
