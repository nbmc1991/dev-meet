import express from 'express';
import mongoose from 'mongoose';


//app config
const app= express();
const PORT= process.env.PORT || 7777;

//middleware

//db config


//api endpoint
app.get('/', (req, res) => res.status(200).send('Hello Clever Programmers'));


//listener
app.listen(PORT, () => console.log(`🌎  ==> http://localhost:${PORT}`));