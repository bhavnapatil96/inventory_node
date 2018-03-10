const {con}=require('../config/conn')
const bcrypt=require('bcryptjs')
const mysql=require('mysql')
exports.createOrderitem=(req,res)=>{
    let query="insert into orderitem(productId,qty,hireDate,returnDate,totalPrice,orderId)values(?,?,?,?,?,?)"
    let param=[req.body.productId,req.body.qty,req.body.hireDate,req.body.returnDate,req.body.totalPrice,req.body.orderId];
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
exports.deleteOrderitem=(req,res)=>{
    let query="update orderitem set isDelete=? where orderitemId=?"
    let param=[true,req.body.orderitemId];
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
exports.getOrderitemByorderId=(req,res)=>{
    let query="select * from orderitem where orderId=? and isDelete=false"
    let param=[req.body.orderId];
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