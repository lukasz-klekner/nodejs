import { promisify } from 'util'
// const scrypt = promisify(require('crypto').randomBytes)
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

const scrypt = promisify(randomBytes)

const algorithm = 'aes-192-cbc'
// const password = 'Password used to generate key'

const encryptText = async (text, password, salt) => {
  //First, we'll generate the key.The key lenghth is dependent on the alg, randomBytesorithm.
  //In this case for aes192, it is 24bytes (192 bits).
  const key = await scrypt(password, salt, 24)
  const iv = await randomBytes(16)

  const cipher = createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')

  return {
    encrypted,
    iv: iv.toString('hex'),
  }
}

// const password = 'Password used to generate key'
// const encrypted =
//   'fff1ecd159396550172052bba431c26962ca528e569afb8327144f90258b6bb5'
// const ivHex = '064a994cb6d42de49e45bff7c144d112'

const decryptText = async (text, password, salt, ivHex) => {
  //First, we'll generate the key. The key length is dependent on the algorithm.
  //In this case for aes192, it is 24 bytes (192 bits).
  const key = await scrypt(password, salt, 24)
  const iv = Buffer.from(ivHex, 'hex') //Initialization vector.

  const decipher = createDecipheriv(algorithm, key, iv)
  let decrypted = decipher.update(text, 'hex', 'utf8')
  decrypted += decipher.final('utf8')

  return decrypted
}

export { encryptText, decryptText }
