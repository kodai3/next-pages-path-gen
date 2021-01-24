import path from 'path'
import createNextTemplate from './createNextTemplate'
import createStaticTemplate from './createStaticTemplate'
import { Config } from './getConfig'

let prevPagesText = ''
let prevStaticText = ''

export const resetCache = () => {
  prevPagesText = ''
  prevStaticText = ''
}

export default ({ input, staticDir, output, basepath }: Config, mode?: 'pages' | 'static') => {
  prevPagesText = mode === 'static' ? prevPagesText : createNextTemplate(input)

  prevStaticText =
    !staticDir || mode === 'pages' ? prevStaticText : createStaticTemplate(staticDir, basepath)

  return {
    text: `${prevPagesText}${prevStaticText}`,
    filePath: path.posix.join(output, 'path.ts')
  }
}
