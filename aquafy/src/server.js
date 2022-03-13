const express = require("express")
const server = express()

server.listen(3000, () => console.log('rodando'))

server.use(express.static("public"))

server.get('/', (request, response) => {
	response.sendFile(__dirname + "/index.html")
})