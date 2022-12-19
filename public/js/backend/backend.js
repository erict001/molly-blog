const uploader = Uploader({
    apiKey: "free"
});

// grabbing blog values
const blogTitle = document.getElementById("blog-title")
const blogContent = document.getElementById("blog-content")
const blogDescription = document.getElementById("blog-description")

// add media to SQL database
const media = document.getElementById("add-media")

//STYLING blog_content_1

//text decoration
const bold = document.getElementById("bold")
const italic = document.getElementById("italic")
const underline = document.getElementById("underline")
//font changes
const fontSize = document.getElementById("font-size")
const fontFamily = document.getElementById("font-families")
const fontChange = document.getElementById("changeText")

// allows us to change value of blog content
const fontArray = ["arial", "verdana", "tahoma", "times-new-roman", "courier-new"]

const pageChange = document.getElementById("pageChange")
const submitBlog = document.getElementById("submit")


const text = document.getElementById("addText")


//DOWNLOAD IMAGE URL FROM AWS FROM LOCAL MACHINE

//
const imageUrl = []
console.log(imageUrl)

//event listener to activate button
media.addEventListener("click", function(){
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
})

//BLOG CONTENT ONE STYLING
function changeBlogContentOne(){
   //TEXT DECORATION
    //Bold text
    bold.addEventListener("click", function(){
        blogContent.style.fontWeight = "bold"
    })

    bold.addEventListener("dblclick", function(){
        blogContent.style = "font-style: normal"
    })

    //Italicize text
    italic.addEventListener("click", function(){
        blogContent.style = "font-style: italic"
    })

    italic.addEventListener("dblclick", function(){
        blogContent.style = "font-style: normal"
    })

    //Underline text
    underline.addEventListener("click", function(){
        blogContent.style = "text-decoration-line: underline"
    })

    underline.addEventListener("dblclick", function(){
        blogContent.style = "font-style: normal"
    })


    //font change
    fontChange.addEventListener("click", function(){
        const textFamily = fontFamily.selectedIndex
        console.log(textFamily)
        //change the style to the variable 
         blogContent.style.fontFamily = fontArray[textFamily]
    })
}

changeBlogContentOne()






pageChange.addEventListener("click", function () {
    location.href = "/"
})


function addBlog(event) {
    event.preventDefault()
    //create new item using an object method
    let newBlog = {
        title: blogTitle.value,
        blog_content: blogContent.value,
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
    location.href = "/"
    resetText()
    //run function to display to page
}

function resetText() {
    blogTitle.value = ""
    blogContent.value = ""
    blogDescription.value = ""
}

submitBlog.addEventListener("click", addBlog)