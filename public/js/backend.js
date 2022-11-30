const uploader = Uploader({
    apiKey: "free"
  });

const bold = document.getElementById("bold")
const blogContent = document.getElementById("blog-content")
const blogDescription = document.getElementById("blog-description")
const pageChange = document.getElementById("pageChange")
const blogTitle = document.getElementById("blog-title")
const submitBlog = document.getElementById("submit")
const media = document.getElementById("add-media")

bold.addEventListener("click", boldText)

function boldText() {
    blogContent.style.fontWeight = "bold"
}


function addMedia() {
    uploader.open({ maxFileCount: 10 })
    .then(
        files => alert(files.length === 0 
                       ? "No files selected." 
                       : `Files uploaded:\n\n${files.map(x => x.fileUrl).join("\n")}`),
        error => alert(error)
      );  
}

media.addEventListener("click", addMedia)


pageChange.addEventListener("click", function() {
    location.href = "/"
})


function addBlog(event) {
    event.preventDefault()
    //create new item using an object method
    let newBlog = {
        title: blogTitle.value,
        blog_content: blogContent.value,
        blog_description: blogDescription.value
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
    blogDescription.value = ""
}

submitBlog.addEventListener("click", addBlog)