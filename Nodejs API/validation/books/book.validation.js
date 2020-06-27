 const { book } = require("./book.schema")

 module.exports = {
     updateBookValidation: async (req, res, next) =>{
         const value = await book.validate(req.body);
         if(value.error){
              res.json({
                  success: 0,
                  message: value.error.message
              })
         } else {
             next();
         }
     }
 }