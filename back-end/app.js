const express = require('express');
const app = express()
const cors = require('cors')
const path = require('path')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors())

//Upraise server
let PORT = 3000;
app.listen(PORT, () => console.log(`corriendo en el puerto ${PORT}`));

app.use(express.static("public"));

//API
const apiApplicants = require('./src/routes/API/applicantsRoute');
const apiProfessions = require('./src/routes/API/professionsRoute');

//Use of the API
app.use(apiApplicants);
app.use(apiProfessions);