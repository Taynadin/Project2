var db = require("../models");

module.exports = function(app) {
    app.get("/api/search", function (req,res) {
        console.log(req.body.location)






        res.json({ here: 'there' }) 
    });
};