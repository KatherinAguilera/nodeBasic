const greet = require("./src/greet")

 greet.emit("clap") //Hacer llamado al evento sin argumento
 greet.emit("greet", "CC") //Hacer llamado al evento, con un argumento

 greet.emit("call", "Carlos Castañeda" ,name=> { //Llamado a evento con función Callback
     console.log(`Hi! ${name}`)
 })