const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const users = [
    {
        username:"mollymagee",
        password:"password"
    },
    {
        username:"erictaylor",
        password:"password1"
    },
]

const blogs = [
    {
        blog_id:1,
        title:"my first blog",
        blog_content:"Welcome to my blog, im going to do this every day! Like share subscribe",
    },
    {
        blog_id:2,
        title:"my final blog",
        body:"I cant do this anymore, blogging every day is too hard.  It was a fun half week yall",
    },
    {
        blog_id:3,
        title:"Cats: a review",
        body:"I love cats I love every kind of cat.  I want to hug all them but you cant. Cant hug every cat......Cant hug every cat. ",
    }
]

const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()