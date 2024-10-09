module.exports = (app) => {
    // controllers
    const github = require("../controllers/github.controller.js");

    // create router
    const router = require("express").Router();
    
    // routes
    router.get("/repos/:userId", github.getReposByUsername);

    app.use("/api/github", router);
};