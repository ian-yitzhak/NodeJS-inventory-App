const passport = require("passport");
const User = require('../models/login')


const register = (req, res, next) => {
  res.render('register')

}

const newUser = (req, res, next) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }).save(err => {
    if (err) { 
      return next(err);
    }
    res.redirect("/login/login");
  });
}
const userLogin = (req,res, next)=>{
  res.render('login')
}

const login = passport.authenticate("local", {
  
  successRedirect: "/",
  failureRedirect: "/login/login"


})

module.exports = {
  newUser,
  register,
  userLogin,
  login
}