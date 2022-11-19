import { createServer } from 'http'
import { readFile, writeFile } from 'node:fs/promises'

const setCounter = async () => {
  const result = await readFile('./counter.txt', 'utf-8')
  return result
}

const server = createServer()
server.listen(3005, 'localhost')

let counter = Number(await setCounter()) ?? 0

server.on('request', async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    })

    counter = counter + 1

    await writeFile('./counter.txt', `${counter}`)
    res.end(`${counter}`)
  } else {
    res.statusCode = 404
    res.end()
  }
})
