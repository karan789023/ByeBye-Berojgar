const express = require('express');
const router = express.Router();
const pyqController = require('../controllers/pyqController');

// file upload endpoint (form-data 'file')
router.post('/upload', pyqController.uploadFileMiddleware, pyqController.uploadPYQ);
router.get('/', pyqController.getPYQs);

module.exports = router;
