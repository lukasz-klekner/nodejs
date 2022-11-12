import { exec } from 'node:child_process'
import { normalize, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function safeJoin(base, target) {
  const targetPath = '.' + normalize('/' + target)
  return resolve(base, targetPath)
}
const userPath = (path) => {
  if (!path) throw new Error('Need to specify a path!')
  return safeJoin(__dirname, path)
}

;(async () => {
  try {
    const { stdout } = await exec('dir', {
      cwd: userPath(process.argv[2]),
    })
    console.log(stdout)
  } catch (e) {
    if (e.stdout) console.log('Oh no', e.stdout)
    else console.log(e)
  }
})()
