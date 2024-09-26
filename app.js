const express = require('express')
const app = express()
const port = 3000
let ejs = require('ejs');
var bodyParser = require('body-parser')


app.set('view engine','ejs')
app.set('views','./views')

app.use(bodyParser.urlencoded({extended: false}))
app.get('/', (req, res) => {
  res.render('index')   // ./views/index.ejs를 불러오기
})

app.get('/contact', (req, res) => {
  res.render('contact')   // ./views/index.ejs를 불러오기
})

app.post('/contactProc', (req, res) => {
  const name=req.body.name;
  const phone=req.body.phone;
  const email=req.body.email;
  const memo=req.body.memo;

  var a=`  ${name} ${phone} ${email} ${memo}`

  res.send(a);
  
})


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})