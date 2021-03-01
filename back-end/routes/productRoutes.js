const express = require('express');

router = express.Router(); 

const productsRoute = require("../controllers/productsControllers");

router.get('/', productsRoute.products);

module.exports = router;