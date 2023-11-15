const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createUser",
  body("email").isEmail(),
  body("name").isLength({ min: 4 }),
  body("password").isLength({ min: 5 }),
  body("location").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
      }).then(res.json({ success: true }));
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({ errors: "Invalid credentials" });
    }
    if (req.body.password !== userData.password) {
      return res.status(400).json({ errors: "check password" });
    }
    return res.json({ success: "login successfull" });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

module.exports = router;
