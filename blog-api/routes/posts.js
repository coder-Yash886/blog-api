const express = require("express");
const router = express.Router()

const{
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
} = require("../controllers/postController")

const {userlogedin} = require('../middleware/auth');
 
router.get('/',getPosts)
router.get('/:id',getPost);
router.post('/',userlogedin,createPost);
router.put('/:id',userlogedin,updatePost);
router.delete('/:id',userlogedin,deletePost);

module.exports = router;
