const User = require('../models/login')
const bcrypt = require('bcrypt');
const Product = require('../models/product')

const register = (req, res, next) => {
  res.render('register')

}

const newUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) return next(err);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword

  }).save(err => {
    if (err) { 
      return next(err);
    }
    res.redirect("/login/login");
  });
  });
}
const userLogin = async(req,res, next)=>{
  const product = await Product.find({}).limit(10).sort({$natural:-1})
    res.render('login' , {product: product})
  
}

const login = (req,res,next) =>{
 if (req.body.password !== 'ian' ) {
    res.send('incorrect pasword')

    return next(err);
  }
res.redirect('/')
}


module.exports = {
  newUser,
  register,
  userLogin,
  login

}