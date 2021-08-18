const Blogs = require("../models/Blogs")

const DeleteBlogs = async (req, res, next) =>{
    const result = await Blogs.deleteOne({_id: req.query.id})

    res.send({
        deletedCount: result.deletedCount
    })
}

module.exports = DeleteBlogs