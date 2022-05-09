const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// gets all the posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);

    }catch(err){
        res.json({message:err});
    }
});

//gets a specific post

router.get('/:postId', async (req, res) => {
   try{
    const post = await Post.findById(req.params.postId);
   res.json(post);
   } catch (err) {
       res.json({ message: err });
   }
});

//delete a specific post

router.delete('/:postId', async (req, res) => {
    try{
     const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
 });

 // update a post
 router.patch('/:postId', async (req, res) => {
    try {
     const updatedPost = await Post.updateOne(
         { _id: req.params.postId }, 
         { $set: {level: req.body.level}}
         );
    res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
 });


//submit a post
router.post('/', async (req, res) => {
const post = new Post({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        membershipDate: new Date(req.body.membershipDate),
        level: req.body.level
});

try{
const savedPost = await post.save();
res.json(savedPost);
} catch (err) {
    res.json({ message: {...err}});

}
});



module.exports = router;