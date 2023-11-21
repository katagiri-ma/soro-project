//認証用
const router = require('express').Router();
// api/auth

router.get('/', (req, res) => {
  res.send('auth routers');
});

module.exports = router;