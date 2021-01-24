import minimist from 'minimist'
import build from './buildTemplate'
import getConfig from './getConfig'
import watch from './watchInputDir'
import write from './writeRouteFile'

export const run = async (args: string[]) => {
  const argv = minimist(args, {
    string: ['enableStatic', 'outDir', 'workDir'],
    alias: { s: 'enableStatic', o: 'outDir', w: 'workDir' }
  })
  const config = await getConfig(argv.enableStatic !== undefined, argv.outDir, argv.workDir)

  write(build(config))
  watch(config.input, () => write(build(config, 'pages')))
  config.staticDir && watch(config.staticDir, () => write(build(config, 'static')))

  return
}
