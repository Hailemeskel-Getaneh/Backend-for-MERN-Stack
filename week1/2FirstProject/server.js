//creatig the first server
const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain')
    res.end('Hello World. I have created my first Server')
});
let PORT = 4000;
// console.clear()
server.listen(PORT, () => {
    console.log(`Server is running at ${PORT} `)
    
})



