 const express = require('express');
 const app = express();
 const mongoose = require('mongoose');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 require('dotenv/config');


 //Middlewares
 app.use(cors());
 app.use(bodyParser.json());
 
 //import routes
 const postsRoute = require('./routes/posts');
 app.use('/posts', postsRoute);
//  app.use('/members', memberRoute);

 //Routes
 app.get('/', (req, res) => {
     res.send('we are on home');
 });




//connect to database
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => console.log('connected to DB'));

//Listening
 app.listen(8000);