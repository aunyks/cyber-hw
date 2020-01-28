const {
  // import key generation function
  createDiffieHellman
} = require('crypto')
// import assertion library
const assert = require('assert')

// create alice's keys. 1024-bits of security
// for speed, not security
const alice = createDiffieHellman(1024)
const aliceKey = alice.generateKeys()

// derive bob's keys from alice's key generation parameters
const bob = createDiffieHellman(alice.getPrime(), alice.getGenerator())
const bobKey = bob.generateKeys()

// compute alice and bob's shared secret
const aliceSecret = alice.computeSecret(bobKey)
const bobSecret = bob.computeSecret(aliceKey)

// assert that they've computed the same secret
// this is the symmetric key that they will use
// for encrypted communication
try {
  assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'))
  console.log('Alice and Bob computed the same secret! They can symmetrically encrypt messages now.')
} catch (e) {
  console.error('Oh no! Alice and Bob computed different secrets!')
}