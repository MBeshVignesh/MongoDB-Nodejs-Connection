const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req,res,next)=>{
    bcrypt.hash(req.body.password,10,(err,hashedPass)=>{
        if(err){
            res.send(err)
        }
    
    let user = new User({
        email: req.body.email,
        password: hashedPass
    })
    user.save((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.json({
                message:"User Added Successfully",
                data
            
            })
            
            
        }
    })
})
}

const login = (req,res,next)=>{
    var username= req.body.username
    var password = req.body.password

    User.findOne({email:username})
    .then(user=>{
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(err){
                    res.send(err)
                }
                if(result){
                    token = jwt.sign({name:user.email},'secretkey',{expiresIn:"1hr"})
                    res.json({
                        message:"Login Successful!",
                        token
                    })
                }else{
                    res.send('The password does not match')
                }
            })
        }else{
            res.send('User Not Found')
        }
    })
}

const authentication = (req,res,next)=>{
    try{
        const jwt_token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(jwt_token,'secretkey')

        req.user = decode
        next()

    }catch(error){
        res.send('Authentication Failed')
    }
}



module.exports = {register,login,authentication}