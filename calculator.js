import { createServer } from 'http'
import { calc } from './calc.js'

const server = createServer()
server.listen(3005, 'localhost')

server.on('request', (req, res) => {
  const [, operation, a, b] = req.url.split('/')
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  })

  const result = calc(operation, Number(a), Number(b))
  res.end(`${result}`)
})
