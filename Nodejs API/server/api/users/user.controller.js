const { create, getUser } = require('./user.services')
const {hashSync, genSaltSync} = require('bcrypt')


module.exports = {
    createUser: (req, res) =>{
        const body = req.body
        //encrypt password
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
        create( body, (err, results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connetion error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        } )
    },
    getUser: (req,res) =>{
        getUser((err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return  res.json({
                success: 1,
                data: results
            });
        })
    }
}