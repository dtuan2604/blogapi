const Blogs = require("../models/Blogs")

const UpdateBlogs = async (req, res, next) =>{
    const blog = await Blogs.findByIdAndUpdate(req.body._id,{
        title: req.body.title,
        text: req.body.text,
        creationDate: Date.now()
    }, {new: true}) 


    res.send(blog)
}

module.exports = UpdateBlogs