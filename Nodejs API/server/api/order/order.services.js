const pool = require('../../db')

const orderdb = {}

orderdb.getOrder = (callback) =>{
    pool.query(
        'SELECT *FROM `order`',
        (err, reuslts) => {
            if(err){
              return callback(err)
            }
            return callback(null, reuslts)
        }
    )
}

orderdb.getOrderById = (data, callback) => {
    pool.query(
        'SELECT *FROM `order` WHERE orderID = ?',
        data,
        (err, reuslts) => {
            if(err){
                return callback(err)
            }
            return callback(null, reuslts)
        }
    )
}

orderdb.createOrder = (data, callback) => {
    pool.query(
        'INSERT INTO `order` (accountID, totalMoney, `status`) VALUES (?,?,?)',
        [data, 0,0],
        (err, results) =>{
            if(err){
                return callback(err)
            }
            return callback(null, results)
        }
    )
}


module.exports = orderdb