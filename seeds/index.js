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
        blog_id: 1,
        title:"my first blog",
        blog_type: "Appetizers",
        blog_image:"/images/food.jpg",
        blog_content:"Welcome to my blog, im going to do this every day! Like share subscribe",
        created_at: "2020-03-12"
    },
    {
        blog_id:2,
        title:"Cats: a review",
        blog_type: "Entrees",
        blog_image:"/images/food.jpg",
        blog_content:"I love cats I love every kind of cat.  I want to hug all them but you cant. Cant hug every cat......Cant hug every cat. ",
        created_at: "2021-05-12"
    },
    {
        blog_id:3,
        title:"my final blog",
        blog_type: "Wine",
        blog_image:"/images/food.jpg",
        blog_content:"I cant do this anymore, blogging every day is too hard.  It was a fun half week yall",
        created_at: "2020-06-12"
    },
    {
        blog_id: 4,
        title:"my second appetizer",
        blog_type: "Appetizers",
        blog_image:"/images/food.jpg",
        blog_content:"Welcome to my blog, im going to do this every day! Like share subscribe",
        created_at: "2020-03-12"
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