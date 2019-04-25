const call = require("./src/call");

// call.greet("Kate Griz")
async function callwithPromise(){
  const fullName = await call.withPromise("Kate", "Griz")
  console.log(fullName);
}
callwithPromise();