import mongoose from "mongoose";
import app from "./app.js"

const PORT = 3002;

const dbstring = 'mongodb+srv://manoj:Mani@7285@cluster0.xyqivuq.mongodb.net/'

// mongoose.connect(dbstring)

// TODO: use env for sensitive values

// professional way of connecting
(async ()=>{
    try{
        await mongoose.connect(dbstring)
        console.log('DB connected succesfully!');

        // listen to errrors in app
        app.on("error",(err)=>{
            console.log("ERROR:",err);
            throw err;
        })

        const onListening = () => {
            console.log(`example app listening on ${PORT}`)
        }

        app.listen(PORT,onListening)
    }catch(error)
    {
        console.log("ERROR:",error);
        throw error;
    }
})()
// ...............................



    