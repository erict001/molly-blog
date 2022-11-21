const router = require("express").Router();

const bold = document.getElementById("bold")
const blogContent = document.getElementById("blog-content")
const pageChange = document.getElementById("pageChange")
const blogTitle = document.getElementById("blog-title")
const submitBlog = document.getElementById("submit")

bold.addEventListener("click", boldText)

function boldText() {
    blogContent.style.fontWeight = "bold"
}


pageChange.addEventListener("click", function () {
    location.href = "/"
})


function addBlog(event) {
    event.preventDefault()
    //create new item using an object method
    let newBlog = {
        id: crypto.randomUUID(),
        title: blogTitle.value.trim(),
        body: blogContent.value.trim(),
    }
    //console.log using JSON stringify
    console.log(newBlog)
    //create a fetch request to post new item
    fetch('/api/blogs', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBlog)
    })
    resetText()
    //run function to display to page
}

function resetText() {
    blogTitle.value = ""
    blogContent.value = ""
}

submitBlog.addEventListener("click", addBlog)

module.exports = router