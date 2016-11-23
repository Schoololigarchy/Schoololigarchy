const router = require('express').Router()

router.get('/', (req,res) => {
	res.send('HI THIS IS HOME')
})


module.exports = router;