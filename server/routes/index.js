var express = require('express');
var passport = require('passport');
var router = express.Router();

var User = require('../models/user');

/* Render home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Home',
        displayName: req.user ? req.user.displayName : ''
    });
});

/* GET ABOUT page */
router.get('/about', function(req, res, next) {
   res.render('about'); 
});

/* GET Education page */
router.get('/education', function(req, res, next) {
   res.render('education'); 
});

/* GET Qualities page */
router.get('/qualities', function(req, res, next) {
   res.render('qualities'); 
});

/* GET Work Expierence page */
router.get('/workexpierence', function(req, res, next) {
   res.render('workexpierence'); 
});

/* GET Safety page */
router.get('/safety', function(req, res, next) {
   res.render('safety'); 
});

/* GET Volunteer Expierence page */
router.get('/volunteerexpierence', function(req, res, next) {
   res.render('volunteerexpierence'); 
});

/* GET Contact page */
router.get('/contact', function(req, res, next) {
   res.render('contact'); 
});

/* GET Project page */
router.get('/Projects', function(req, res, next) {
   res.render('Projects'); 
});


/* Render Login page. */
router.get('/login', function (req, res, next) {
    if (!req.user) {
        console.log("rendering login");
        res.render('login', {
            title: 'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
        return;
    }
    else {
        return res.redirect('/users');
    }
});

/* Process the Login Request */
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/users',
    failureRedirect: '/login',
    failureFlash: true
}));

/* Show Registration Page */
router.get('/register', function (req, res, next) {
    if (!req.user) {
        res.render('register', {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/');
    }
});

/* POST signup data. */
router.post('/register', passport.authenticate('local-registration', {
    //Success go to Profile Page / Fail go to Signup page
    successRedirect : '/users',
    failureRedirect : '/register',
    failureFlash : true
}));


/* Process Logout Request */
router.get('/logout', function (req, res){
  req.logout();
  res.redirect('/');
});


/* Show Todo List Page */
router.get('/todolist', function (req, res, next) {

        res.render('todolist', {
            title: 'Todos',
            displayName: req.user ? req.user.displayName : '',
            username: req.user ? req.user.username : '' 
        });

});


module.exports = router;
