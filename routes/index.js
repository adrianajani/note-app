const router = require('express').Router();

const newnote = require('./note');

router.use('/note', note);

module.exports = router;
