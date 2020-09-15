const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const PORT=process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post('/',function(req,res){
    let n1=Number(req.body.v1);
    let n2=Number(req.body.v2);
    let sum=n1+n2;
    res.send("the sum is : "+sum);
});

app.listen(PORT);