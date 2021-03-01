const express = require('express');
var cors = require('cors');
const app = express(); 
const productsRoute = require('./routes/productRoutes');

const port = 9000; 

app.use(cors());

app.use("/products.json", productsRoute);

app.listen(port, () => {
    console.log(`app is listening at port: ${port}`);
}); 