const express = require("express");
const routes = require('./routes');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/',routes);

app.listen(port,()=>{
console.log(`app escutando na porta ${port}`);
})
