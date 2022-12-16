const uploader = Uploader({
    apiKey: "free"
});

const bold = document.getElementById("bold")
const blogContent = document.getElementById("blog-content_1")
const blogContent2 = document.getElementById("blog-content_2")
const blogContent3 = document.getElementById("blog-content_3")
const blogContent4 = document.getElementById("blog-content_4")
const blogContent5 = document.getElementById("blog-content_5")
const blogDescription = document.getElementById("blog-description")
const pageChange = document.getElementById("pageChange")
const blogTitle = document.getElementById("blog-title")
const submitBlog = document.getElementById("submit")
const media = document.getElementById("add-media")
const text = document.getElementById("addText")


const imageUrl = []
console.log(imageUrl)

bold.addEventListener("click", boldText)

function boldText() {
    blogContent.style.fontWeight = "bold"
}


function addMedia() {
    uploader.open({ multi: true }).then(files => {
        if (files.length === 0) {
            console.log('No files selected.')
        } else {
            console.log('Files uploaded:');
            console.log(files.map(f => f.fileUrl));
            imageUrl.push(files[0].fileUrl);
            console.log(typeof imageUrl)
            console.log(typeof imageUrl[0])
            // for (let i = 0; i < files.length; i++){
            //     imageUrl.push(files[i].fileUrl);
            //     console.log(imageUrl)  
            // }
        }
    }).catch(err => {
        console.error(err);
    });
}

media.addEventListener("click", addMedia)


pageChange.addEventListener("click", function () {
    location.href = "/"
})


function addBlog(event) {
    event.preventDefault()
    //create new item using an object method
    let newBlog = {
        title: blogTitle.value,
        blog_content_1: blogContent.value,
        blog_content_2: blogContent2.value,
        blog_content_3: blogContent3.value,
        blog_content_4: blogContent4.value,
        blog_content_5: blogContent5.value,
        blog_description: blogDescription.value,
        blog_image: imageUrl[0],
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