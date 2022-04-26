import mongoose  from "mongoose";
import UsersSchema from "../models/users.js";

let data 

export const createUsers = async (req,res) =>{
  const {
    name,
  } = req.body
  //  const {id}= req.body  
  //  var newId = new mongoose.mongo.ObjectId(id.toString());
  // console.log(user)
  try {
    

    const users = new UsersSchema({
      name:name
    })
    await users.save()
    res.status(201).json({users})
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const getUsers = async (req,res) =>{
 

  try {
    const users  = await UsersSchema.find()
    
    res.status(201).json({users, data})
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

  // export const getData = (req) =>{
  //   console.log(data, 'test')

    
  // }



export const updateUser = async (req,res) =>{
  const {id} = req.params;
  console.log(id)
  const {Smoke, Phone,Mask} = req.body

    const user = await UsersSchema.findOne({_id: id})
    const {smoke, phone,mask} = user
    smoke.push(Smoke)
    phone.push(Phone)
    mask.push(Mask)
    console.log(smoke, phone,mask)


  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);



  const updateuser = {smoke, phone,mask, _id:id} 

  await UsersSchema.findByIdAndUpdate(id,updateuser, { new: true } )

  res.json(updateuser)
}