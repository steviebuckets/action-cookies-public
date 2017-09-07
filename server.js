const express = require ('express');
const bodyParser = require ('body-parser');


const app = express();
if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
}

app.set('port', (process.env.PORT || 3001));

//Displays Instagram Posts
// app.get('/insta', (req, res) => {
//   if(req.query){
//     const insta = req.query['q'];
//     var unirest = require('unirest');
//     var photos = encodeURI(req.query['q']);
//     var Request = unirest.get(``)
//   }
// })
