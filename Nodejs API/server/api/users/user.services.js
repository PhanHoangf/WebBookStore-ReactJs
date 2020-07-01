const pool = require("../../db");
const { createOrder } = require("../order/order.services");

module.exports = {
    create: (data, callback) =>{
            pool.query(
                `INSERT INTO account(userName, passWord, displayName, phoneNumber, role) 
                                VALUES(?,?,?,?,?)`,
                [
                    data.user_name,
                    data.password,
                    data.display_name,
                    data.phone_number,
                    data.role
                ],
            (err, results, fields) =>{
                if(err){
                   return callback(err)
                }
                return callback(null, results)
            }
        );
    },
    // create: (data, callback) => { 
    //     pool.beginTrasaction( err => {
    //         if(err){
    //             return callback(err);
    //         }
    //         pool.query(
    //                 `INSERT INTO account(userName, passWord, displayName, phoneNumber, role) 
    //                                 VALUES(?,?,?,?,?)`,
    //                 [
    //                     data.user_name,
    //                     data.password,
    //                     data.display_name,
    //                     data.phone_number,
    //                     data.role
    //                 ],
    //             (err, results, fields) =>{
    //                 if(err){
    //                     return pool.rollback(
    //                         callback(err)
    //                     )
    //                 }
    //                 var insertedID = results.insertId; 
    //                 createOrder(insertedID, (err, results)=>{
    //                     if(err){
    //                         return pool.rollback(
    //                             callback(err)
    //                         )
    //                     }
    //                     return callback(null, results)
    //                 })
    //             }
    //         );
    //     })
    //},
    getUser: callback =>{
        pool.query('SELECT * from account',[],
        (err,results,fields)=>{
            if(err)
            {
                return callback(err)
            }
            return callback(null,results)
        }
        )
    },
    getUserByUsername: (username, callback) =>{
        pool.query(
            'SELECT *from `account` where userName = ?'
            ,[username],
            (err, results) =>{
                if(err){
                    return callback(err);
                }
                return callback(null, results[0])
            }
        )
    }
}