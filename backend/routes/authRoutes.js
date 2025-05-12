const express = require("express");
const passport = require("passport");
const router = express.Router();
require('dotenv').config();

// Google OAuth Login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google OAuth Callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    req.session.save(() => {
      res.redirect(`${process.env.FRONTEND_URL}/dashboard`);
    });
  }
);


// Logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie("connect.sid", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax"
      });
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
});

// Get User Info
router.get("/user", (req, res) => {
  console.log("Session User:", req.user); // Log session data to ensure it's populated
  if (!req.user) {
    console.error("User not authenticated");
    return res.status(401).json({ error: "Unauthorized: No user data found" });
  }
  res.status(200).json(req.user);
});

module.exports = router;
