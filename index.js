const express=require('express')
const cors=require('cors')
const BodyParse=require('body-parser')
const app=express()
const mongoose=require('mongoose')
const morgan=require('morgan')
const dotenv=require('dotenv')
const port=9000
const UserRoute=require("./Router/User")
dotenv.config()
//connect DB
mongoose.connect((process.env.MONGODB_URL), { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Kết nối thành công đến cơ sở dữ liệu');
    })
    .catch((error) => {
        console.error('Lỗi kết nối đến cơ sở dữ liệu:', error);
    });

app.use(BodyParse.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))

///Route
app.use("/v1/User",UserRoute)

app.listen(port,()=>{console.log(`sever is running at http://localhost:${port}`);})