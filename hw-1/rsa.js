const {
  generateKeyPairSync
} = require('crypto')

// how we text encode the keys
// to print to the console
const keyEncoding = {
  type: 'pkcs1',
  format: 'pem'
}
const generationParameters = {
  // 1024 bit keys for speed
  // 4096 is recommended for security
  modulusLength: 1024,
  publicExponent: 3,
  publicKeyEncoding: keyEncoding,
  privateKeyEncoding: keyEncoding
}

// generate alice and bob's rsa keys based on the above parameters
const alice = generateKeyPairSync('rsa', generationParameters)
const bob = generateKeyPairSync('rsa', generationParameters)

// print their keys
console.log('ALICE\'S PUBLIC KEY')
console.log('===================')
console.log(alice.publicKey)

console.log('BOB\'S PUBLIC KEY')
console.log('=================')
console.log(bob.publicKey)