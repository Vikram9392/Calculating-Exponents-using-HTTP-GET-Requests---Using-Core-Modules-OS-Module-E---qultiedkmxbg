const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value1 = obj.num1;
      const value2 = obj.num2;

      // Write code here to calculate power of a number
      if(parseInt(value1)<1||parseInt(value2)<0){
        res.writeHead(404,{'content-Type':'text/plain'});
        res.end("The operation cannot be performed")
      }
      else{
        res.writeHead(200,{'content-Type':'text/plain'})
        res.send(`The result is ${result}`)
        }
        Math.pow(value1,value2)
    });
    }
});

module.exports = server;
      