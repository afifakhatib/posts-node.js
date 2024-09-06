const express = require('express') // instance of express 

const router = express.Router();

// const getAllPostsData = require('../controller/posts-controller');
// const getSinglePost = require('../controller/posts-controller');
// const createPost = require('../controller/posts-controller');
// const updatePost = require('../controller/posts-controller');
// const deletePost = require('../controller/posts-controller');

const { 
    getAllPostsData,getSinglePost,createPost,updatePost,deletePost
} = require('../controller/posts-controller')


router.get('/api/v1/posts' , getAllPostsData)

router.get('/api/v1/posts/:id' , getSinglePost)

router.post('/api/v1/posts' , createPost)

router.patch('/api/v1/posts/:id' , updatePost)

router.delete('/api/v1/posts/:id' , deletePost)

module.exports = router

