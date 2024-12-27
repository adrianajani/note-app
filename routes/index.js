const router = require('express').Router();

const newnote = require('./newnote');

router.use('/newnote', newnote);

module.exports = router;