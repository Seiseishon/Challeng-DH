const express = require('express');
const router = express.Router();

//API controller
const apiApplicants = require('../../controllers/API/applicantsController');

//Route
router.get('/api/applicants', apiApplicants.list);

module.exports = router;