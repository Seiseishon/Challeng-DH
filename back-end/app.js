const express = require('express');
const app = express()

//Upraise server
let PORT = 3000;
app.listen(PORT, () => console.log(`corriendo en el puerto ${PORT}`));

//API
const apiApplicants = require('./src/routes/API/applicantsRoute');
const apiProfessions = require('./src/routes/API/professionsRoute');

//Use of the API
app.use(apiApplicants);
app.use(apiProfessions);