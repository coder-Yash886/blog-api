const Post = require("../models/Post");

const getPosts = async function(req,res){
    try{
        const posts = await Post.find()
        .populate('author','name email')
        .sort({createdAt: -1});

        res.status(200).json({
            success: true,
            count: posts.length,
            data: posts
        });
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getPost = async function(req,res){
    try{
        const post = await Post.findById(req.params.id)
        .populate('author','name email')

        if(!post){
            return res.status(404).json({
                success: false,
                message: "post not found"
            })
        }
        res.status(200).json({
            success: true,
            data: post
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
    
}

const createPost = async function(req,res){
    try{
        req.body.author = req.user.id; 
        const post = await Post.create(req.body);
        
        res.status(201).json({
            success: true,
            message: "post created successfully",
            data: post
        })
     } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
     }
}

const updatePost = async function(req,res){
    try{
        let post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
                success: false,
                message: "post not found"
            })
        }

        if(post.author.toString() !== req.user.id){
            return res.status(403).json({
                success: false,
                message: "Your not update the post"
            })
        }

        post = await Post.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true
        })
        res.status(200).json({
            success: true,
            message: "post updated successfully",
            data: post
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const deletePost = async function(req,res){
    try{
        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
                success: false,
                message: "post not found"
            })
        }

        if(post.author.toString() !== req.user.id){
            return res.status(403).json({
                success: false,
                message: "You not delete the post"
            })
        }

        await post.deleteOne();

        res.status(200).json({
            success: true,
            message: "post deleted successfully"
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}