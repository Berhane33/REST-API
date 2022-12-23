const express = require("express");
const { addUser } = require("../controller/user");
const router = require("express").Router();

router.route("/users").post(addUser);

module.exports = router;