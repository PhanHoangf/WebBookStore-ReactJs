const pool = require('../../db')

const bookdb = {}

bookdb.getBook = callback =>{
    pool.query('CALL `USP_Get_Book`()',[],(err, results)=>{
        if(err){
            return callback(err)
        }
        return callback(null, results[0])
    })
}

bookdb.createBook = (data, callback) =>{
    pool.query(
        "INSERT INTO book (`title`, `authorID`, `categoryID`,`price` ,`describe`, `numberOfPages`,`bookImage`) VALUES (?,?,?,?,?,?,?) ",
        [
            data.title,
            data.authorID,
            data.categoryID,
            data.price,
            data.describe,
            data.numberOfPages,
            data.bookImage
        ],
        (err, results, fields) =>{
            if(err){
                return callback(err)
            }
            return callback(null, results)
        }
    )
}

bookdb.updateBook = (data, callback)=>{
    pool.query(
        'UPDATE book SET `title` = ?, `authorID` = ?, `categoryID` = ?, `price` = ?, `describe` = ?, `numberOfPages` = ?, `bookImage` = ? WHERE bookID = ? ',
        [
            data.title,
            data.authorID,
            data.categoryID,
            data.price,
            data.describe,
            data.numberOfPages,
            data.bookImage,
            data.bookID
        ],
        (err, results, fields) => {
            if(err){
                return callback(err)
            }
            return callback(null, results)
        }
    )
}

bookdb.deleteBook = (data, callback) =>{
    pool.query('DELETE FROM book WHERE bookID = ?',
        [data.id],
        (err, results, fields) =>{
            if(err){
                return callback(err)
            }
            return callback(null, results[0])
        }
    )
}

module.exports = bookdb
