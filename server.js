require('dotenv').config(); 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const studentRouter = require("./routes/routes");
const cors = require('cors');

app.use(cors());
app.use(express.json());

async function connectDb() {
    const uri = process.env.MONGODB_URI;  
    await mongoose.connect(uri); 
}


connectDb().catch((error)=>{
    console.log(error);
})

app.get('/',(req,res)=>{
    res.send('App Running');
});

app.use(studentRouter);

const port = process.env.PORT || 3000;  

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
