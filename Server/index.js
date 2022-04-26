const express = require('express');
const mongoose = require('mongoose');
const ValuesModel = require('./models/models');
const app = express()
require ('dotenv').config();
const port = process.env.PORT || 5000

app.use(express.json())

// .................... DB Config .......................
const DBConnection = ()=>{
    return mongoose.connect(process.env.CONNECTION_STRING,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result)=>{console.log("DB CONNECTED SUCCESSFULLY")})
    .catch((error)=>{console.log(error)})
}
DBConnection()

//................... Controllers .........................
const GetData = async(req,res)=>{
    try {
        const data = await ValuesModel.find()
        // res.json({Message:"All Data",data})
        res.json(data)
    }catch (error) { res.json({Message:"Error",error})}
}

const AddData = async(req,res)=>{
    let {Temperature_C,Humadity} = req.body
    let Temperature_F = 1.8*Temperature_C+32
    try {
        const data = new ValuesModel({Temperature_C,Temperature_F,Humadity})
        await data.save()
        res.json({Message:"Data Added Success",data})
    }catch (error) {res.json({Message:"Error",error})}
}

const AddData_Query = async(req,res)=>{
    let Temperature_C = req.query.temp
    let Humadity = req.query.hum
    let Temperature_F = 1.8*Temperature_C+32
    try {
        const data = new ValuesModel({Temperature_C,Temperature_F,Humadity})
        await data.save()
        res.json({Message:"Temp Added Success",data})
    }catch (error) {res.json({Message:"Error",error})}
}

let sensor='0',value = '0'
const Get_State =(req,res)=>{
    let {state , val}=req.body
    sensor=state
    value=val
    try{
        res.json({state,val})
    }
    catch (error){res.json({Message:"Error",error})}
}

const Send_State = (req,res)=>{
    try {
        res.json({sensor,value})
    } catch (error) {
        res.json({Message:"Error",error})
    }
}

//......................... APIs ........................
app.get("/",GetData)
app.post("/",AddData)  // Adding data through post metheod & body
app.get("/add",AddData_Query) // Adding data through get method & query
app.post("/sendstate",Get_State)
app.get("/getstate",Send_State)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))