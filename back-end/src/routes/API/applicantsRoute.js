const express = require('express');
const multer = require('multer');
const path = require('path')
const router = express.Router();

//Configuracion de Multer
let multerStorage = multer.diskStorage({
    destination:(req,file, cb)=>{
        let folder = path.join(__dirname, "../../../public/img/applicants")
        cb(null, folder)
    },
    filename:(req,file,cb)=>{
        let imageName = "imgUser" + Date.now() + path.extname(file.originalname)
        cb(null, imageName)
    }
})

const upload = multer({ storage:multerStorage })

//API controller
const apiApplicants = require('../../controllers/API/applicantsController');
const applicantsController = require('../../controllers/API/applicantsController');

//Route
router.get('/api/applicants', apiApplicants.list);
router.get('/api/applicants/:id', apiApplicants.detail);
router.post('/api/applicant/create', upload.single('imgUser'), apiApplicants.create);
router.post('/api/applicant/edit/:id', apiApplicants.edit);
router.delete('/api/applicant/delete/:id', applicantsController.delete)
module.exports = router;