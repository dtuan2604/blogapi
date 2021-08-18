const Blog = require("../models/Blogs")

const CreateBlog = async (req, res, next) =>{

    const blog = new Blog({
        title: req.body.title,
        text: req.body.text,
        pokemon: req.body.pokemon
    })

    const result = await blog.save()

    res.send(result)
}

module.exports = CreateBlog