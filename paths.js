import { basename, dirname, extname, normalize, resolve } from 'node:path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const path = process.argv[2]

// console.log(dirname(path))
// console.log(basename(path))
// console.log(extname(path))

const safeJoin = (base, target) => {
  const targetPath = '.' + normalize('/' + target)
  return resolve(base, targetPath)
}

console.log(safeJoin(__dirname, path))
