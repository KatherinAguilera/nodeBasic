const server = require('http').Server();
// instancia de server para que se incluya
const io = require('socket.io')(server);
//puerto
const port = require('./config').SERVER_PORT;

const banner = `
***********************
  Basic Node.js Course
    Course Project
  Tic Tac Toe Server
***********************
Status: Online
Listening: on port: ${port}
`;
// devolver un socket
io.on('connection', (socket) => {
  // clic a jugar user id de su socket
  socket.on("register", (user) => {
    console.info(`User registed: ${user.name}`)
  })
})

server.listen(port, () => {
  console.info(banner);
});