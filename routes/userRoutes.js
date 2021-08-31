const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  getallusers,
  deleteuser,
} = require("../controllers/userController");

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/deleteuser", deleteuser);

router.get("/getallusers", getallusers);

module.exports = router;
