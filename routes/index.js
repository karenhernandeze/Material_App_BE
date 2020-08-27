const { Router } = require('express');
const controllers = require('../controllers/material');
//const router = Router();

module.exports = (app) => {
  app.get('/', (req, res) => res.send('Welcome, please login'))
  app.post('/materials', controllers.create);
  app.get('/materials', controllers.getAll);
  app.get('/materials/:materialId', controllers.getById);
  app.put('/materials/:materialId', controllers.update);
  app.delete('/materials/:materialId', controllers.deleteMaterial);

}

// router.post('/posts', controllers.createPost);
// router.get('/posts', controllers.getAllPosts);
// router.get('/posts/:postId', controllers.getPostById);
// router.put('/posts/:postId', controllers.updatePost);
// router.delete('/posts/:postId', controllers.deletePost);

//module.exports = router;

// const companyController = require('../controllers').material;
// var express = require('express');
// var router = express.Router();

// module.exports = (app) => {
//     // app.get('/api', (req,res) => res.status(200).send(
//     //     sql.query("SELECT * FROM material", (err, res) => {
//     //     if (err) {
//     //       console.log("error: ", err);
//     //       result(null, err);
//     //       return;
//     //     }
    
//     //     console.log("customers: ", res);
//     //     result(null, res);
//     //   })));

//     // app.post('/api', companyController.create); 
//     //app.get('/api', companyController.findAll)
//     app.get('/api', companyController.getUsers)
// }; 


