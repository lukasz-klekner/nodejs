import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'
;(async () => {
  await pipeline(
    createReadStream(
      './zamki-na-opolszczyznie-do-jakich-opolskich-zamkow-warto-sie-udac.jpeg'
    ),
    createWriteStream('./savedStream.png')
  )
})()
