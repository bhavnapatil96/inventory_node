const {con}=require('../config/conn')
const bcrypt=require('bcryptjs')
const mysql=require('mysql')
exports.createProduct=(req,res)=>{
    let query="insert into product(productName,categoryId,manufacturer,userId,stock,price,discount,description)values(?,?,?,?,?,?,?,?)"

    let param=[req.body.productName,req.body.manufacturer,req.body.userId,req.body.stock,req.body.price,req.body.discount,req.body.description];
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

exports.editProduct=(req,res)=>{
    let query="update product set productName=?,categoryId=?,manufacturer=?,userId=?,stock=?,price=?,discount=?,description=? where productId=?"
    //  let bpass=bcrypt.hashSync(req.body.password,10)
    let param=[req.body.productName,req.body.categoryId,req.body.manufacturer,req.body.userId,req.body.stock,req.body.price,req.body.discount,req.body.description,req.body.productId];
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

exports.deleteProduct=(req,res)=>{
    let query="update product set isDelete=? where productId=?"
    let param=[true,req.body.productId];
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

exports.fetchProduct=(req,res)=>{
    let query="select * from product where isDelete=false"
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

