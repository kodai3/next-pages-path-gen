# next-pages-path-gen

CLI to generate pages path for Next.js.

## Install

```sh
$ yarn add -D next-pages-path-gen
```

## Setup

`package.json`

```json
{
  "scripts": {
    "build:path": "next-pages-path-gen"
  }
}
```

## Usage

```tsx
import Link from "next/link"
import { pagesPath } from "../lib/path"

console.log(pagesPath.post.create.$query()) // { pathname: '/post/create' }
console.log(pagesPath.post._pid(1).$query()) // { pathname: '/post/[pid]', query: { pid: 1 }}

export default () => {
  const onclick = useCallback(() => {
    router.push(pagesPath.post._pid(1).$query())
  }, [])

  return (
    <>
      <Link href={pagesPath.post._pid(1).$query()} />
      <div onclick={onclick} />
    </>
  )
}
```

## License

[MIT License](https://github.com/kodai3/next-pages-path-gen/blob/master/LICENSE).
