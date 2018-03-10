const {con}=require('../config/conn')
const bcrypt=require('bcryptjs')
const mysql=require('mysql')
exports.createUser=(req,res)=>{
    let query="insert into user(email,password,conatctNo,address,dob,userType)values(?,?,?,?,?,?)"
    let bpass=bcrypt.hashSync(req.body.password,10)
    let param=[req.body.email,bpass,req.body.contactNo,req.body.address,req.body.dob,req.body.userType];
    query=mysql.format(query,param);
    con.query(query,(err,result)=>{
        if(err)
        {
            console.log('error',err)
            res.json({"Error" : true, "Message" : "Error in executing MySQL query"});
        }
        if(result)
        {
            console.log('response',result)
            res.json({result})
        }
    })
};

exports.editUser=(req,res)=>{
    let query="update user set email=?,conatctNo=?,address=?,dob=?,userType=? where userId=?"
  //  let bpass=bcrypt.hashSync(req.body.password,10)
    let param=[req.body.email,req.body.contactNo,req.body.address,req.body.dob,req.body.userType,req.body.userId];
    query=mysql.format(query,param);
    con.query(query,(err,result)=>{
        if(err)
        {
            console.log('error',err)
            res.json({"Error" : true, "Message" : "Error in executing MySQL query"});
        }
        if(result)
        {
            console.log('response',result)
            res.json({result})
        }
    })
};

exports.deleteUser=(req,res)=>{
    let query="update user set isDelete=? where userId=?"
    let param=[true,req.body.userId];
    query=mysql.format(query,param);
    con.query(query,(err,result)=>{
        if(err)
        {
            console.log('error',err)
            res.json({"Error" : true, "Message" : "Error in executing MySQL query"});
        }
        if(result)
        {
            console.log('response',result)
            res.json({result})
        }
    })
};

exports.fetchUser=(req,res)=>{
    let query="select * from user"
    con.query(query,(err,result)=>{
        if(err)
        {
            console.log('error',err)
            res.json({"Error" : true, "Message" : "Error in executing MySQL query"});
        }
        if(result)
        {
            console.log('response',result)
            res.json({result})
        }
    })
};

exports.getUser=(req,res)=>{
    let query="select * from user where userId=?"
    let param=[req.body.userId];
    query=mysql.format(query,param);
    con.query(query,(err,result)=>{
        if(err)
        {
            console.log('error',err)
            res.json({"Error" : true, "Message" : "Error in executing MySQL query"});
        }
        if(result)
        {
            console.log('response',result)
            res.json({result})
        }
    })
};
