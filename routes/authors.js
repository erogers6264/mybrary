const express = require("express")
const router = express.Router()

// Authors index route.
router.get("/", function(req, res) {
    res.render("authors/index")
})

// New Author route.
router.get("/new", function(req, res) {
    res.render("authors/new")
})

// New Author route.
router.post("/create", function(req, res) {
    res.send("Create author")
})


module.exports = router