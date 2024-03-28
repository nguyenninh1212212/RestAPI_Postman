const UserController = require('../controller/UserController')

const routers=require('express').Router()

//ADD

routers.post('/',UserController.addUser)
routers.get('/',UserController.getUser)
routers.put('/:id',UserController.updateUser)
routers.delete('/:id',UserController.deleteUser)
module.exports=routers