const Blogs = require("../models/Blogs")

const GetBlogs = async (req, res, next) =>{
    const result = await Blogs.find()
    const blogs = result.sort((a,b)=>{
        return new Date(b.creationDate) - new Date(a.creationDate)
    })
    
    res.send(blogs)
}

module.exports = GetBlogs