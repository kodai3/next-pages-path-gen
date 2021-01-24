import fs from 'fs'
import path from 'path'
import build, { resetCache } from '../src/buildTemplate'
import getConfig from '../src/getConfig'
import write from '../src/writeRouteFile'

describe('cli test', () => {
  test('main', async () => {
    for (const dir of fs.readdirSync(path.join('__tests__', 'projects'))) {
      resetCache()

      const workingDir = path.join(process.cwd(), '__tests__', 'projects', dir)
      const { input, staticDir, output } = await getConfig(true, 'lib', workingDir)

      const basepath = /-basepath$/.test(dir) ? '/foo/bar' : undefined
      const writeOptions = build({ input, staticDir, output, basepath })
      write(writeOptions)

      const result = fs.readFileSync(`${output}/path.ts`, 'utf8')
      expect(writeOptions.filePath).toBe(`${output}/path.ts`)
      expect(
        writeOptions.text.replace(
          new RegExp(
            `${
              /\\/.test(workingDir) ? `${workingDir.replace(/\\/g, '\\\\')}(/src)?` : workingDir
            }/`,
            'g'
          ),
          ''
        )
      ).toBe(result.replace(/\r/g, ''))
    }
  })
})
