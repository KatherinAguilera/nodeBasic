const cp = require("child_process");
// Mostar lista de carpeta y archivos
function execComand(command){
  cp.exec(command, (err, stdout, stderr) => {
      if (err) {
        console.log(`Error: ${err}`); return;
      }
      if (stdout) console.log(`Standard out: \n${stdout}`);
      if (stderr) console.log(`Standard out: \n${stdout}`);
    })
}

// execComand("ls");
// funcion en script de multiplicar
execComand("node ./src/script --base=6");