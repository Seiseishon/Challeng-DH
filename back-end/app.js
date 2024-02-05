const express = require('express');
const app = express()
let PORT = 3000;
app.listen(PORT,()=> console.log(`corriendo en el puerto ${PORT}`));