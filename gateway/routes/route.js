// gateway/routes/users.js
const express = require('express');
const userRoutes = require('../../services/Users/routes/user_route'); // Points to user service routes
const newsRoute = require('../../services/News/routes/neswarout');
const router = express.Router();

router.use('/users', userRoutes); // All /users-related routes will be forwarded to the user microservice
router.use('/news',newsRoute);

module.exports = router;
