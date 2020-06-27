const { getBook, createBook, updateBook, deleteBook } = require('./book.services');
const bookdb = require('./book.services');

const bookController = {}

bookController.getBook = (req, res) =>{
    getBook((err, results)=>{
        if(err){
            console.log(err);
            return;
        }
        return  res.json(results);
    })
}

bookController.createBook = (req, res) =>{
    const body = req.body
    createBook(body, (err, results)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error"
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    })
}

bookController.updateBook = (req, res) => {
    const body = req.body
    updateBook(body, (err, results) => {
        if(err){
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error"
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Update successfully"
        });
    })
}
bookController.deleteBook = (req, res) =>{
    const body = req.body
    deleteBook(body, (err, results)=>{
        if(err){
            console.log(err);
            return;
        }
        if(!results){
            return  res.json({
                success: 0,
                message: "Record not found"
            });
        }
        return  res.json({
            success: 1,
            message: "book deleted successfully"
        });
    })
}
module.exports = bookController
