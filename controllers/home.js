const BlogPost = require('../models/BlogPost')
module.exports = (req,res)=>{
    BlogPost.find({},(err,posts)=>{
        res.render('pages/index',{
            blogposts: posts
        })
    })
}