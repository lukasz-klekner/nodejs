import { decryptText, encryptText } from './cypher.js'

const SALT = 'sadwsngdvlcsmdpdigjridd'

;(async () => {
  const encrypted = await encryptText('siemkaaaa', 'haslo', SALT)

  console.log(encrypted)
})()
