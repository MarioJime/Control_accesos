const express = require('express');
const router = express.Router();

//Controladores
const AuthController = require('../controllers/AuthController');
const PostController = require('../controllers/PostController');

//Middlewares
const auth = require('../middlewares/auth');    

//Policies
const PostPolicy = require('../policies/PostPolicy');


//Ruta Home
router.get('/', (req, res) => {
    res.json({ Welcome:'user!' })
})

//Ruta de login y registro

router.post('/api/login', AuthController.login);
router.post('/api/check_in', AuthController.check_in);

//Rutas posts

router.get('/api/posts', auth, PostController.index);
router.get('/api/posts/:id', auth, PostController.find,PostPolicy.show, PostController.show);
router.patch('/api/posts/:id', auth, PostController.find,PostPolicy.update,PostController.update);
router.delete('/api/posts/:id', auth, PostController.find,PostPolicy.delete, PostController.delete);


module.exports = router;