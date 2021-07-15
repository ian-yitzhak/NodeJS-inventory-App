const express = require('express')
const app = express()

require('./db/db')
app.get('/', (req,res)=>{
	req.send('Heloo')
})

const port =process.env.PORT || 3000;
app.listen(port, ()=> console.log(`app running on ${port}`))