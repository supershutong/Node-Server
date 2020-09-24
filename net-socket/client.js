const net = require('net')

const port = 3000
const host = '127.0.0.1'

const client = net.createConnection(port, host)

client.on('connect', () => {
  console.log('client is connected')
})

client.on('data', (data) => {
  console.log('client get server data: ', data.toString())
})

// 结束连接要end
client.end('this is client')

client.on('close', () => {
  console.log('client is closed')
})
