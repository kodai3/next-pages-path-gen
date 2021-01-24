/* eslint-disable */
import { Query as Query0 } from '../pages'
import { OptionalQuery as OptionalQuery1 } from '../pages/[pid]'
import { Query as Query2 } from '../pages/blog/[...slug]'

export const pagesPath = {
  _a: (a: string | number) => ({
    b: {
      _c: (c: string[]) => ({
        $query: (url?: { hash?: string }) => ({ pathname: '/[a]/b/[...c]' as const, query: { a, c }, hash: url?.hash })
      })
    }
  }),
  _pid: (pid: string | number) => ({
    $query: (url?: { query?: OptionalQuery1, hash?: string }) => ({ pathname: '/[pid]' as const, query: { pid, ...url?.query }, hash: url?.hash })
  }),
  aaa: {
    _bbb: (bbb: string[]) => ({
      ccc: {
        $query: (url?: { hash?: string }) => ({ pathname: '/aaa/[...bbb]/ccc' as const, query: { bbb }, hash: url?.hash })
      }
    }),
    api: {
      samples: {
        $query: (url?: { hash?: string }) => ({ pathname: '/aaa/api/samples' as const, hash: url?.hash })
      }
    }
  },
  blog: {
    _slug: (slug: string[]) => ({
      $query: (url: { query: Query2, hash?: string }) => ({ pathname: '/blog/[...slug]' as const, query: { slug, ...url.query }, hash: url.hash })
    }),
    hoge: {
      _fuga: (fuga?: string[]) => ({
        $query: (url?: { hash?: string }) => ({ pathname: '/blog/hoge/[[...fuga]]' as const, query: { fuga }, hash: url?.hash })
      })
    }
  },
  $query: (url: { query: Query0, hash?: string }) => ({ pathname: '/' as const, query: url.query, hash: url.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  aa_json: '/foo/bar/aa.json',
  bb: {
    cc_png: '/foo/bar/bb/cc.png'
  }
} as const

export type StaticPath = typeof staticPath
