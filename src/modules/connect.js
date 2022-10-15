const mongoose = require('mongoose');
 
 const URI = 'mongodb://localhost:27017/livescore-management-system-for-the-Gambia-female-league';
 
 const connect = () => {
  return mongoose.connect(URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   autoIndex: false,
  })
 };

 


 module.exports = connect;

 
