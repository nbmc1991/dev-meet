const express = require('express');

const routes = require('./routes');


//app config
const app = express();
const PORT  = process.env.PORT || 7777;

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/',routes)
//db config


//api endpoint
// app.get('/', (req, res) => res.status(200).send('Hello!!!'));


//listener
app.listen(PORT, () => console.log(`🌎  ==> http://localhost:${PORT}`));
