const mongoose = require('mongoose')
 
 const leagueSchema = new mongoose.Schema(
  {
   name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
})


leagueSchema.set('toJSON', {
    transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id.toString()
     delete returnedObject._id
     delete returnedObject.__v
     // the password should not be revealed
     delete returnedObject.password
    }
   })
   
   
   const League = mongoose.model('league', leagueSchema)
   
   module.exports = League
  

