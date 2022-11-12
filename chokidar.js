import { watch } from 'chokidar'
import { readFile } from 'node:fs/promises'

const readFileContent = async (path) => {
  try {
    const content = await readFile(`${path}`, 'utf-8')
    return content
  } catch (error) {
    if ((error.code = 'ENOENT')) {
      console.log(err.code, 'File is not valid!')
    } else {
      console.log('Unknown error:', error)
    }
  }
}

const watchFilesInAnyPath = (path, extendFile) => {
  watch(`${path}/*${extendFile}`, {
    ignoreInitial: true,
    awaitWriteFinish: true,
  })
    .on('add', async (file) => {
      console.log(`${file} has been added`)
      console.log(await readFileContent(file))
    })
    .on('change', async (file) => {
      console.log(`${file} has been changed`)
      console.log(await readFileContent(file))
    })
    .on('unlink', (file) => {
      console.log(`${file} has been removed`)
    })
}

watchFilesInAnyPath(process.argv[2], '.txt')
