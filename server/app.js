const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/*+json'}))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))


const twatt = require('./routers/twatt')
// const facebook = require('./routers/facebook')

// app.get('/', function(req,res){
//     res.send('hello test app tweet')
// })


// app.use('/twatt', twatt)
// app.use('/facebook',facebook)

app.listen(3000,()=>{
    console.log('server run PORT 3000')
})