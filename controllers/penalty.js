const {con}=require('../config/conn')
const bcrypt=require('bcryptjs')
const mysql=require('mysql')
exports.createPenalty=(req,res)=>{
    let query="insert into penalty(orderItemId,overDueDays,penaltyAmount)values(?,?,?)"
    let param=[req.body.orderItemId,req.body.overDueDays,req.body.penaltyAmount];
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
exports.deletePenalty=(req,res)=>{
    let query="update penalty set isDelete=? where penaltyId=?"
    let param=[true,req.body.penaltyId];
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
exports.getPenalty=(req,res)=>{
    let query="select * from penalty where isDelete=false"
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