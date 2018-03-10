
//......................this is IMP

const {con}=require('../config/conn')
const bcrypt=require('bcryptjs')
const mysql=require('mysql')
exports.createOrder=(req,res)=>{
    let query="insert into orders(orderDate,userId,paymentType,totalAmount)values(CURDATE(),?,?,?)"
    let param=[req.body.userId,req.body.paymentType,req.body.totalAmount];
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
exports.deleteOrder=(req,res)=>{
    let query="update orders set isDelete=? where orderId=?"
    let param=[true,req.body.orderId];
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
exports.getOrders=(req,res)=>{
    let query="select * from orders where isDelete=false"
    let param=["false"]
    query=mysql.format(query);
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
exports.getOrdersByDate=(req,res)=>{
    let query="select * from orders where orderDate=? and isDelete=false"
    let param=[req.body.orderDate]
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