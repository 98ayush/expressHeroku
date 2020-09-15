const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const PORT=process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/home.html");
});
app.get('/about',function(req,res){
    res.sendFile(__dirname+"/about.html");
});
app.get('/contact',function(req,res){
    res.sendFile(__dirname+"/contact.html");
});
app.get('/calculator',function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post('/calculator',function(req,res){
    let n1=Number(req.body.v1);
    let n2=Number(req.body.v2);
    let sum=n1+n2;
    res.send("the sum is : "+sum);
});
app.get('/bmi',function(req,res){
    res.sendFile(__dirname+"/bmi.html");
});
app.post('/bmi',function(req,res){
    let w1=Number(req.body.weight);
    let h1=Number(req.body.height);
    let bmi=w1/(h1*h1);
    res.send("the BMI is : "+bmi);
});
app.listen(PORT);