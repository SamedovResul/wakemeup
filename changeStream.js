// import db from 'mongodb'
// import UsersSchema from "./models/users.js";
// import { MongoClient } from "mongodb";
// const {Collection} = db
// console.log(Collection)


// export const  readData = () =>{
//   let changeStream;
//   async function run() {
//     try {
//       await client.connect();
//       const database = client.db("myFirstDatabase");
//       const collection = database.collection("users");
//       // open a Change Stream on the "haikus" collection

//       changeStream = UsersSchema.watch();
//       // set up a listener when change events are emitted
//       changeStream.on("change", next => {
//         // process any change event
//         console.log(next,"test");
//       });
//       await simulateAsyncPause();
//       await simulateAsyncPause();
//       await changeStream.close();
      
//       // console.log(collection);
//     } finally {
//       await client.close();
//     }
//   }
//   run().catch(console.dir);
// }



