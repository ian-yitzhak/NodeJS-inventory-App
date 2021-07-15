const mongoose = require('mongoose')

mongoose.connect(
	"mongodb+srv://ian_test:METH71@sellah@ian.qfm7u.mongodb.net/auth?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true  }

	)
.then(()=> console.log('Connected successfully'))
.catch((err)=> console.log(err))
