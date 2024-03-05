const express = require('express');
const router = express.Router();

//API controller
const apiApplicants = require('../../controllers/API/applicantsController');
const applicantsController = require('../../controllers/API/applicantsController');

//Route
router.get('/api/applicants', apiApplicants.list);
router.get('/api/applicants/:id', apiApplicants.detail);
router.post('/api/applicant/create', apiApplicants.create);
router.post('/api/applicant/edit/:id', apiApplicants.edit);
router.delete('/api/applicant/delete/:id', applicantsController.delete)

module.exports = router;