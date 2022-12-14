const Express = require('express');
const App = Express();
const path = require("path");
const PORT = process.env.PORT || 5000;
App.use(Express.static(path.join(__dirname, "./build")));

App.get("*", (req, res) => {

    res.sendFile(path.join(__dirname, "./build/index.html"), function (err) { res.status(500).send(err); });

})
App.listen(PORT, () => {
      console.log("listening for requests");
})