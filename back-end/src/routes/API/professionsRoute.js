const express = require('express');
const router = express.Router();

//API controller
const apiProfessions = require('../../controllers/API/professionsController');

//Route
router.get('/api/professions', apiProfessions.list);

module.exports = router;