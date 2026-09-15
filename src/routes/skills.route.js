const express = require('express');
const getSkills = require('../controllers/skills.controller')
const router=express.Router();

router.get('/api/skills', getSkills)

module.exports = router;