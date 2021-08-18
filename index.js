const express = require('express')
const app = express()
const { corsOptionsRequests, corsSimpleRequests } = require('./middleware/cors')
const bodyParser = require('body-parser')
const removePoweredBy = require('./middleware/removePoweredBy')
const CreateBlog = require('./services/createBlog')
const GetBlogs = require('./services/getBlogs')
const UpdateBlogs = require('./services/updateBlogs')
const DeleteBlog = require('./services/deleteBlogs')
const Pokemon = require('./services/pokemon')


app.options('*', corsOptionsRequests)
app.use(corsSimpleRequests)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(removePoweredBy)

app.post('/pokemon', Pokemon)
app.post('/createBlog', CreateBlog)
app.post('/updateBlog', UpdateBlogs)
app.delete('/deleteBlog',DeleteBlog)
app.get('/home', GetBlogs)


module.exports = app