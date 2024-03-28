const DATA=require('../model/MD')
const params=require('params')
const UserController={
    addUser:async(req,res,err)=>{
    try{
        const newUser=new DATA(req.body)
        const saveUser=await newUser.save()
        res.status(200).json(saveUser)
    }
    catch{
        res.status(500).json(err)
    }
    },

    getUser:async(req,res,err)=>{
         try{
            const getUser=await DATA.find({})
            res.status(200).json(getUser)
         }
         catch{
            res.status(400).json(err)
         }
    }
,

    updateUser:async(req,res,err)=>{
        try{
        const FindUser=await DATA.findById(req.params.id)    
        await FindUser.updateOne({$set:{pass:req.body.pass}});
        res.status(200).json("Success!")
        }
        catch{
            res.status(400).json(err)
        }
    },

    deleteUser:async(req,res,err)=>{
        try{
            await DATA.findByIdAndDelete(req.params.id)   
            res.status(200).json("Delete success!")
        }
        catch{
            res.status(400).json(err)
        }
    }
}

module.exports= UserController