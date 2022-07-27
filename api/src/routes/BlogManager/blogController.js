const {Blog} = require('../../db');

const agregarBlog =async (req,res)=>{
    const {blog} = req.body;
    try{    
        const postedBlog = await Blog.create({
            blog
        });
        res.send(postedBlog);

    }catch(error){
        console.log(error);
        res.send(error);
    }
}
const getBlog = async (req,res)=>{
    try {   
        const blogs = await Blog.findAll();
        res.send(blogs);
        
    } catch (error) {
        console.log(error);
    }
};
const deleteBlog = async (req,res)=>{
    const {id} = req.params;
    try {
        const deletedPost = await Blog.destroy(id);
        res.send(deletedPost);
    } catch (error) {
        console.log(error)
    }
};
module.exports = {
    agregarBlog,
    getBlog,
    deleteBlog
}