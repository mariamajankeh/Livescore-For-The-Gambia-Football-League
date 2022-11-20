const mongoose = require('mongoose')
 
 const divisionSchema = new mongoose.Schema(
  {
   name: {
    type: String,
    required: true,
    
   },
   number:{
    type:String,
    
   },

   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'

   }

}
)

divisionSchema.set('toJSON', {
    transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id.toString()
     delete returnedObject._id
     delete returnedObject.__v
     // the password should not be revealed
     delete returnedObject.password
    }
   })
   
   
   const Division = mongoose.model('division', divisionSchema)
   
   module.exports = Division
  
