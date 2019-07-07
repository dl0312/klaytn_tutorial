// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '2000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY =
  '0x9a3debdf9e3a15c394f73e6d9c09c613c6bcb1c8b005b915adbcdac24e267d87'

module.exports = {
  networks: {
    klaytn: {
      provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null
    }
  }
}
