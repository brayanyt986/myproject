const router = require('express').Router();
const upload = require('express-fileupload');
const { append } = require('express/lib/response');

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.render('profile',{ user: req.user });
});

// router.get('/donor',(req,res) =>{
//     res.render('donor')
// });

router.get('/ben1',(req,res) =>{
    res.render('beneficiary1',{ user: req.user});
});


router.get('/ben2',(req,res) =>{
    res.render('beneficiary2',{ user: req.user});
});

router.get('/ben3',(req,res) =>{
    res.render('beneficiary3',{ user: req.user});
});

router.get('/don1',(req,res) =>{
    res.render('donor1',{ user: req.user});
});

router.get('/don2',(req,res) =>{
    res.render('donor2',{ user: req.user});
});

router.get('/',(req,res)=>{
    res.sendFile(_dirname + '../beneficiary1.ejs')
})


// router.post('../uploads',(req,res) =>{
//     if(req.files) {
//         console.log(req.files)
//         var file = req.files.file
//         var filename = file.name
//         console.log(filename)

//         file.mv('./uploads/'+ filename, function(err){
//             if(err){
//                 res.send(err)
//             }else{
//                 res.send('File Uploaded')
//             }
//         })
  


//     }

// })








module.exports = router;