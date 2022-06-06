require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models/index');


//Settings
// const PORT = process.env.PORT || 3000;

//Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas

app.use(require('../app/routes/routes'))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port `, process.env.PORT)

  sequelize.authenticate().then(() => {
    console.log('Connected to the database');
  })

})
