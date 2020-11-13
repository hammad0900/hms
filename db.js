const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/hms',{
    useNewUrlParser:true,
    useCreateIndex:true
}).then((status=>{
    console.log("Connected to database")
}))
.catch(err=>{
    console.log(err.message)
})

