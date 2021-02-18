const mongoose=require('mongoose');
const routs=require('./routes');//folder needs to be created, with index file

const express=require('express');
const app=express();
const PORT=process.env.PORT||3453;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}
app.use(routs);

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/DevMeet');

app.listen(PORT,()=>{
    console.log(`🪐==>Data travel activated via portal: ${PORT}`)
});