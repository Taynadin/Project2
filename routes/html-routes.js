var path = require("path");


module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

  app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form.html"));
  });

  app.get("/properties", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/properties.html"));
  });

  app.get("/property", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/single-property.html"));
  });

};
