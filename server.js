const express = require('express')
const app = express()

const originRouter  = require('./routes/origin')

require('./db/db')

app.use(express.json())
app.get('/', (req,res)=>{
	res.send('Heloo')
})

app.use('/origin',  originRouter)

const port =process.env.PORT || 3000;
app.listen(port, ()=> console.log(`app running on ${port}`))