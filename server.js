global.token='';
const express=require('express');
const bodyParser=require('body-parser');
var passport=require('passport');
var app=express();

app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials",true);
    res.header(`Access-Control-Allow-Methods`, `POST`);
    res.header(`Access-Control-Allow-Methods`, `DELETE`);
    res.header(`Access-Control-Allow-Methods`, `PATCH`);
    res.header(`Access-Control-Expose-Headers`, `x-auth`);
    next();
});
require("./routes/index")(app,passport);

app.get('/',(res,resp)=>{
    resp.sendFile(__dirname + '/');
});
app.listen(3004,()=>{
    console.log('server is started');
});