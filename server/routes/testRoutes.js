const express = require('express');
const router = express.Router();
const { createTest, getTests } = require('../controllers/testController');

router.post('/create', createTest);
router.get('/', getTests);

module.exports = router;
