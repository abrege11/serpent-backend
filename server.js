const express = require('express');
require('dotenv').config();

async function init() {
    const app = express();

    app.get("/", (req, res) => {
        res.json({ message: "Leetcode API" })
    });

    require("./api/routes/leetcode.routes")(app);
    require("./api/routes/github.routes")(app);
    const port = process.env.PORT;
 
    app.listen(process.env.PORT, () => {
        console.log("server running on port " + port);
    });
}

init();