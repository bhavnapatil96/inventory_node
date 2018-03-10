const {con}=require('../config/conn')
const mysql=require('mysql')

exports.createWalletTransaction=(req,res)=>{
    let query="insert into wallettransaction(userId,transactionDate,cardDetails,amount,status)values(?,?,?,?)"
    let param=[req.body.UserId,req.body.transDate,req.body.card,req.body.amount,req.body.status];
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
// exports.updateWalletTransaction=(req,res)=>{
//     let query="insert into wallettransaction(userId,transactionDate,cardDetails,amount)values(?,?,?,?)"
//     let param=[req.body.UserId,req.body.transDate,req.body.card,req.body.amount];
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