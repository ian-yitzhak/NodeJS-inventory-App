const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const session = require("express-session");
const passport = require("passport");
const app = express()

const originRouter  = require('./routes/origin')
const indexRouter  = require('./routes/index')
const productRouter  = require('./routes/product')

require('./db/db')
require('./controllers/auth')(passport)

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine" , "ejs")
app.set("views", __dirname + '/views')
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


app.use('/origin',  originRouter)
app.use('/',  indexRouter)
app.use('/product',  productRouter)

const port =process.env.PORT || 3000;
app.listen(port, ()=> console.log(`app running on ${port}`))