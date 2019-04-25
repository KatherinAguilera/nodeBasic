const call = require('./src/call');

// console.log(call.sync("Katherine Aguilera"));

// call.withCallback("Jimmy Hanse", call.sync);

call.withPromise("Ken Steek")
  .then(name=>{ console.log(name) });


// call.withPromise( 'Mario', call.sync, call.withCallback(call.bienvenidoCallback) ).then( stat => {stat;} );>