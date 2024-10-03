// console.log("Hello Abhishek");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
res.send('Abhishek Singh')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please Log in Abhishek Code</h1>')
})
app.get('/youtube',(res,req)=>{
    req.send('<h2>Chai aur Code</h2>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})