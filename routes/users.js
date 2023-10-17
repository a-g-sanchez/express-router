const express = require('express')
const { User } = require('../models')
const router = express.Router()


router.get('/', async(req, res, next) => {
    try{
        const users = await User.findAll()
        if(!users){
            throw new Error('No Users')
        }
        res.send({ users })
    }catch(err){
        next(err)
    }
})

router.get('/:id', async(req, res, next) => {
    const id = req.params.id
    try{
        const user = await User.findByPk(id)
        if(!user){
            throw new Error(`No user with id of ${id}`)
        }
        res.send({ user })
    }catch(err){
        next(err)
    }
})


module.exports = router