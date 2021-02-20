const xprss=require('express');
const angrySquirl=require('mongoose');
const dataLink=require('./dataLink');//for the server to conncect, this folder must contain an index file
const app=xprss();
const FREQUENCY=process.env.FREQUENCY||7777;

app.use(xprss.urlencoded({extended:true}));
app.use(xprss.json());
if(process.env.NODE_ENV==='production'){
    app.use(xprss.static('client/build'))
}
app.use(dataLink);

angrySquirl.connect(process.env.MONGODB_URI||'mongodb://localhost/dev-meet');
app.listen(FREQUENCY,()=>{
    console.log(`🌎  ==> API Server now listening on PORT ${FREQUENCY}!`)
})