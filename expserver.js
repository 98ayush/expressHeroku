const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/calculator',function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post('/calculator',function(req,res){
    let n1=Number(req.body.v1);
    let n2=Number(req.body.v2);
    let sum=n1+n2;
    res.send("the sum is : "+sum);
});

app.listen(5000,function(req,res){
    console.log("server is running at the port : 5000");
});