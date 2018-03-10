const {con}=require('../config/conn')
const mysql=require('mysql')

//it is only trigger not insert query fire
exports.createWallet=(req,res)=>{
    let query="insert into wallet(userId,balance)values(?,?)"
    let param=[req.body.UserId,50];
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

exports.getWallet=(req,res)=>{
    let query="select balance from wallet where userId=?"
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

// exports.editWallet=(req,res)=>{
//     let query="update wallet set userId=?,balance=? where walletId=?"
//     let param=[req.body.email,bpass,req.body.contactNo,req.body.address,req.body.dob,req.body.userType,req.body.walletId];
//     query=mysql.format(query,param);
//     con.query(query,(err,result)=>{
//         if(err)
//         {
//             console.log('error',err)
//             res.json({"Error" : true, "Message" : "Error in executing MySQL query"});
//         }
//         if(result)
//         {
//             console.log('response',result)
//             res.json({result})
//         }
//     })
// };
//
// exports.fetchWallet=(req,res)=>{
//     let query="select * from wallet"
//     con.query(query,(err,result)=>{
//         if(err)
//         {
//             console.log('error',err)
//             res.json({"Error" : true, "Message" : "Error in executing MySQL query"});
//         }
//         if(result)
//         {
//             console.log('response',result)
//             res.json({result})
//         }
//     })
// };