# next-pages-path

automatically generate page path for Next.js.

## Install

```sh
$ yarn add -D next-pages-path
```

## Setup

`package.json`

```json
{
  "scripts": {
    "build:path": "next-pages-path"
  }
}
```

## Usage

```tsx
import Link from "next/link"
import { pagesPath } from "../lib/path"

console.log(pagesPath.post.create.getQuery()) // { pathname: '/post/create' }
console.log(pagesPath.post._pid(1).getQuery()) // { pathname: '/post/[pid]', query: { pid: 1 }}

export default () => {
  const onclick = useCallback(() => {
    router.push(pagesPath.post._pid(1).getQuery())
  }, [])

  return (
    <>
      <Link href={pagesPath.post._pid(1).getQuery()} />
      <div onclick={onclick} />
    </>
  )
}
```

## License

[MIT License](https://github.com/kodai3/next-pages-path/blob/master/LICENSE).
