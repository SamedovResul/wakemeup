import mongoose from 'mongoose'

const Users = mongoose.Schema({
  // _id:String,
  name:String,
  smoke:{
    type:Array,
    default:[],
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  phone:{
    type:Array,
    default:[],
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  mask:{
    type:Array,
    default:[],
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
})

const UsersSchema = mongoose.model("users", Users)


export default UsersSchema