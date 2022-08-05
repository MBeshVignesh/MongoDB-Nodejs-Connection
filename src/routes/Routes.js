const express = require('express')
const mongoose = require('mongoose')
const Router = express.Router()
const Alien = require('../models/model')
const AuthController = require('../controllers/AuthController')

    Router.route('/aliens')
        .get(AuthController.authentication,async(req,res)=>{
            try{
                const alien = await(Alien.find())
                res.json(alien)

            }catch(err){
                res.send('Error'+':'+err)
            }
            
        })
        .post(AuthController.authentication,async(req,res)=>{
            try{
                const alien = new Alien(req.body)
                const a1 = await alien.save()
                res.json(a1)
            }catch(err){
                res.send('Error 401'+ err)
            }   
        })

    Router.route('/aliens/:contactID')
        .get(AuthController.authentication,async(req,res)=>{
            try{
                const alien = await(Alien.find({_id:req.params.contactID}))
                res.json(alien)

            }catch(err){
                res.send('Error'+':'+err)
            }
            
        })
        .patch(AuthController.authentication,async(req,res)=>{
            try{
                const alien = await(Alien.findOneAndUpdate({_id:req.params.contactID},req.body,{new:true,useFindAndModify:false}))
                res.json(alien)

            }catch(err){
                res.send('Error'+':'+err)
            }
            
        })
        
        .delete(AuthController.authentication,async(req,res)=>{
            try{
                const a1 = await(Alien.remove({_id:req.params.contactID}))
                res.send('Deleted Successfully')
            }catch(err){
                res.send('Error 401')
            }   
        })


module.exports = Router