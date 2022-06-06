const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const benroutes = require('./routes/ben-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const upload = require('express-fileupload');
const port = process.env.PORT || 3000;

const app = express();

// set view engine
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use( express.static( "public" ) );
// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});

// set up routes
app.use('/auth',authRoutes);
app.use('/profile', profileRoutes);
app.use('/beneficiary',benroutes);

// create home route
app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});

app.listen(port, () => {
    console.log('Local server is running on ${port}');
});


app.get('/',(req,res)=>{
    res.sendFile(_dirname+'/beneficiary1.html')
})





