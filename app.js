const express=require('express')
const app=express()
const port=3000


app.use(express.static('Application'))
app.use('/Styles',express.static(__dirname+'Application/Styles'))
app.use('/Assets',express.static(__dirname+'Application/Assets'))
app.use('/Scripts',express.static(__dirname+'Application/Scripts'))


app.set('Views','./Views')
app.set('view engine','ejs')

app.get('',(req,res)=>{
    res.render('home')
})
app.get('',(req,res)=>{
    res.render('login')
})
app.get('',(req,res)=>{
    res.render('recipe')
})

app.listen(port,()=>console.info('Listening on port 3000'))
 
