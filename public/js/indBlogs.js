const title = document.querySelector("h1")

const blogURL = `api/blogs/:id`;

fetch(blogURL)
.then((response) => {
    return response.json();
})
.then(function(data) {
        console.log(JSON.parse(data))
        title.textContent = data.blog_content
    })