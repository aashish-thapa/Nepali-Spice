const express = require('express');
const { getMenuItems, addMenuItem, getMenuItemsByCategory } = require('../controllers/menuController');

const router = express.Router();

router.get('/', getMenuItems);
router.post('/', addMenuItem);
router.get('/menu/:category', getMenuItemsByCategory )
module.exports = router;
