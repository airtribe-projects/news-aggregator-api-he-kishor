const { get_prefrence, update_preference } = require('../controllers/preferenceControllers');
const { get_headlines, get_article} = require('../controllers/getArticleController');
const  { create_articleread, get_readArticleData }= require('../controllers/readarticleController');
const express = require('express');
const {authenticate} = require('../../../setups/middleware');

const router = express.Router();

//prefrence user
router.get('/preferences',authenticate,get_prefrence);
router.patch('/preferences',authenticate,update_preference);

// get headline base n the user prefrence
router.get('/headlines',authenticate,get_headlines);
router.get('/articles/:page',authenticate,get_article);

// read as article 

router.post('/read',authenticate,create_articleread);
router.get('/read',authenticate,get_readArticleData);

module.exports = router;