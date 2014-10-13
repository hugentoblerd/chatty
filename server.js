
// imports the http module
var http = require('http');
// port to listen on
var port = 8021;
// array for storing messages temporarily
var messages = ['hey', 'there'];

// callback for the createServer method
var onRequest = function (req, res) {
  res.writeHead(200, {
      'Connection': 'close',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
  if (req.method === 'GET') {
    res.end(JSON.stringify({'message': messages}))
  }else if (req.method == 'POST') {
    var postData = '';
    req.on('data', function(chunk) {
      postData += chunk;
      messages.push(JSON.parse(postData));
    });
    req.on('end', function() {
      console.log("Got POST data:");
      console.log(JSON.parse(postData));
   });
  };
};

// listening on port 8021
http.createServer(onRequest).listen(port, function () {
  console.log('listening on port ' + port);
});




