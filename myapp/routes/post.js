// const { router } = require("../app");
const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
    res.status(200).send('post_page!!!')
})

router.post('/', function(req, res){
    
})



module.exports = router;