var express = require('express')
var app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

var allProducts = []

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/new',(req,res)=>{
    res.render('addProduct')
})

app.post('/addProduct',(req,res)=>{
    const name = req.body.txtName
    const price = req.body.txtPrice
    const category = req.body.txtCategory
    const product = {
        'name' :name,
        'price': price,
        'category' : category
    }
    allProducts.push(product)
    res.render('insertSuccess',{'product':product,
        'allProducts':allProducts})
})

const PORT = 9000
app.listen(PORT,()=>{
    console.log("server is up!")
})
