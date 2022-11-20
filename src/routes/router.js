const express = require('express');
const router = express.Router();

const { createUser, getAllUsers, getOneUser,updateOne,deleteOne } = require('../controllers/user');


// User route
  router.post('/user', createUser);
  router.get('/user', getAllUsers);
  router.get('/user/:id', getOneUser);
  router.put('/user/:id', updateOne);
  router.delete('/user/:id', deleteOne);


  //const express = require('express');
//const router = express.Router();
const { createDivision, getAllDivision, getOneDivision, updateOneDivision, deleteOneDivision } =
require('../controllers/division');
//const { createSale, } = require('../controllers/division');


// Division route
router.post('/division', createDivision);
router.get('/division', getAllDivision);
router.get('/division/:id', getOneDivision)
router.put('/division/:id', updateOneDivision)
router.delete('/division/:id', deleteOneDivision)
   




module.exports = router;

