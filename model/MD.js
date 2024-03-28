const mongoose=require('mongoose')
const Schemas=mongoose.Schema



const UserSchema=new Schemas({
    id :{type:String,require:true},
    user :{type:String, require:true},
    pass :{type:String,require:true}
},{
    timestamps:true
})


module.exports=mongoose.model("User",UserSchema)