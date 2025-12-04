// server/routes/api/auth.api.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

// LOGIN (Angular POST /api/auth/login)
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({
    message: 'Login successful',
    user: req.user
  });
});

// LOGOUT
router.post('/logout', (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).json({ error: 'Logout failed' });

    res.json({ message: 'Logged out successfully' });
  });
});

// CHECK SESSION STATUS
router.get('/me', (req, res) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return res.json({ loggedIn: true, user: req.user });
  }
  res.json({ loggedIn: false });
});

module.exports = router;