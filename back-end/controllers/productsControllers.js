const axios = require("axios");

exports.products = async (req, res) => {
    /*TODO: - SOLVE PROBLEMS WITH .ENV VARIABLES
            - ADD .ENV VARIABLES
     */
    const API_KEY = "fd080a3c4b62da26b9cb750dff07bbca";
    const PASSWORD = "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";
    const HOSTNAME = "jerry-london.myshopify.com";
    const VERSION = "2021-01";
    const RESOURCE = "products";

    const url = `https://${HOSTNAME}/admin/api/${VERSION}/${RESOURCE}.json`;

    const request =  await axios.get(url, {
        auth: {
            username: API_KEY,
            password: PASSWORD
          }
    })
        .then(res => {return res.data})
        .catch((error) => {
            console.log(error);
          });
        

    
    res.status(200).json({
        status : "success",
        data : { request },
    });
}