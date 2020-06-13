const pool = require("../../db")

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
        )
    },
    getUser: callback =>{
        pool.query('SELECT accountID,userName,displayName,phoneNumber from account',[],
        (err,results,fields)=>{
            if(err)
            {
                return callback(err)
            }
            return callback(null,results)
        }
        )
    }
}