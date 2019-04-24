const add = require("./src/addition");
const sim = require("./src/intensive");

add.syncSum(1,2);
add.asyncSum(4,2);

sim.simulateAsync();
// sim.simulateSync();