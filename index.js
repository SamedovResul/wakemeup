import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import usersRouter from './router/usersRouter.js'
import { Server } from "socket.io";
import { createServer } from 'http';
// df
const app = express()
dotenv.config()
app.use(cors(),)
const httpServer = createServer(app);
const io = new Server(httpServer,  {
  cors: {
    origin: "https://dahs-board.vercel.app/",
  }

});




io.on("connection", (socket) => {

    socket.on("device", (param) =>{
      io.emit("device",param)
      // console.log(param)
    })

});




app.get('/', (req,res) =>{
  res.send("hello world")
})



app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));


app.use('/', usersRouter)





const PORT =  process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => httpServer.listen((PORT), () => console.log(`server running on Port:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`))


console.log(`server running on Port:${PORT}`)