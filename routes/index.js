const express = require('express');
const indexController = require('../controllers/indexControllers');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.index);
router.get('/about', indexController.about);
router.get('/projects', indexController.projects);
router.get('/services', indexController.services);
router.get('/contact', indexController.contact);

module.exports = router;
