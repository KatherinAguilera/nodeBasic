const http = require('http');
const fs = require('fs');

// servidor metodo de node request, response
const server = http.createServer((req, res) => {
  // lectura de archivo
	fs.readFile("./resources/my_page.html", (err, data) => {
    if(err) {console.error(err); return; }
		res.end(data);
	});
});
console.log("Iniciando servidor");
server.listen(3000);