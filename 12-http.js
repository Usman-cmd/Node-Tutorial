const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welcome to our Home Page')
    }
    else if (req.url === '/about'){
        res.end('Welcome to our About Page')
    }
    else{
        res.end(`
            <h1>Oops!</h1>
            <p>We cant see to find the page that you are looking for</p>
            <a href = "/">Back home </a>
        `)
    }
   

})

server.listen(5000)