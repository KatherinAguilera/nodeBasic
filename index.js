const express = require(`express`);
const app = express();

/* GET http://localhost:3000 */
app.get(`/`, (req, res) => {
  res.send(`Estoy en la ruta HOME`);
});

/* GET http://localhost:3000/app */
app.get("/app", function(req, res, next) {
  console.log(req.query.filtro);
  if (req.query.filtro) {
    next();
    return;
  }
  res.send(`Estoy en la ruta APP`);
});

/* GET http://localhost:3000/app?filtro=JUAN */
app.get("/app", function(req, res) {
  let filtro = req.query.filtro;
  res.send("Get filtro: " + filtro);
});

/* GET http://localhost:3000/app/1 */
app.get("/app/:id", function(req, res, next) {
  let id = req.params.id;
  res.send("Get id: " + id);
});

app.get(`*`, (req, res) => {
  res.send(`No sé dónde estoy.`);
});

app.listen(3000, () => {
  console.log(`Express está en escucha en el puerto 3000.`);
});