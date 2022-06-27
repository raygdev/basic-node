module.exports = function routeHandler(req,res){
    const url = req.url
    const method = req.method
    console.log(method)
    console.log(url)
    if(url === '/'){
      res.setHeader('Content-Type', 'text/html')
      res.write(`
      <html><body style='display:flex'>
        <div style='margin:auto auto'>
          <h1>Hello From Node.js</h1>
          <form action='/create-user' method='POST'>
              <input type='text' name='username' placeholder='username'/>
              <button type='submit'>Submit</button>
          </form>
        </div>
      </body></html?
      `)
      return res.end()
    }
  
    if(url === '/create-user' && method === 'POST'){
        const body = []
        res.statusCode = 302
        res.setHeader('Location','/')
      req.on('data',(chunk) => {
          console.log(chunk)
          body.push(chunk)
      })
      req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString()
          console.log(parsedBody.split('=')[1])
          return res.end()
      })
    }
    if(url === '/users'){
      res.write(`
      <html>
          <body style='display: flex'>
              <ul style='padding-left: 0px; list-style-type:none; margin: auto auto'>
              <li>User1</li>
              <li>User2</li>
              <li>User3</li>
              </ul>
          </body>
      </html>
      `)
      return res.end()
    }
}