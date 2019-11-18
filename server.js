const port =  3000
require('http')
  .createServer((req, res) => {
    console.log(`incoming url: ${req.url} and incoming method: ${req.method}`)
    res.writeHeader(200,{'Content-Type': 'text/html'})
    res.write('<p>AWS Codepipeline</p>')
    res.write('<p>This is Nodejs application</p>')
    res.end('<h1>Hello Zenqore</h1>')
  })
  .listen(port, (error)=>{
    console.log(`server is running on ${port}`)
  })
