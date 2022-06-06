const router = require('express').Router();

router.get('/ben1',(req,res) =>{
    res.render('beneficiary1')
});

module.exports = router;