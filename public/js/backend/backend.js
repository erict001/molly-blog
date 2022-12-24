const uploader = Uploader({
    apiKey: "free"
});

// grabbing blog values
const blogTitle = document.getElementById("blog-title")
const blogContent = document.getElementById("blog-content")
const blogDescription = document.getElementById("blog-description")
const blogContent1 = document.getElementById("blog-content-1")
const blogContent2 = document.getElementById("blog-content-2")
const blogContent3 = document.getElementById("blog-content-3")

// add media to SQL database
const media = document.getElementById("add-media")

//allowing change to adjust blog_content based on user selection
const blogSelector = document.getElementById("contentSelector")
const blogButton = document.getElementById("blogButton")
const blogChoice = ["bg1", "bg2", "bg3", "bg4", "bg5"]

//text decoration
const bold = document.getElementById("bold")
const italic = document.getElementById("italic")
const underline = document.getElementById("underline")

//font changes
const fontSize = document.getElementById("font-size")
const fontFamily = document.getElementById("font-families")
const fontChange = document.getElementById("changeText")

//add list elements
const headerFont = document.getElementById("headerFont")
const headers = document.getElementById("header-style")
const headerArray = ["xx-large", "x-large", "large", "medium", "small", "12px"]

// allows us to change value of blog content
const fontArray = ["arial", "verdana", "tahoma", "times-new-roman", "courier-new"]

const pageChange = document.getElementById("pageChange")
const submitBlog = document.getElementById("submit")

const text = document.getElementById("addText")


//DOWNLOAD IMAGE URL FROM AWS FROM LOCAL MACHINE//
const imageUrl = []
console.log(imageUrl)

//event listener to activate button
media.addEventListener("click", function () {
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

//CHANGE BLOG CHOICE
//grab the blog that we want to adjust
//add text box based on which blog we choose
//if text box === clicked => 
//
blogButton.addEventListener("click", function(){
    const blogs = blogSelector.selectedIndex
    console.log(blogChoice[blogs])

})

//ADD ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//BLOG CONTENT ONE STYLING
function changeBlogContentOne() {
    //change header size
    headerFont.addEventListener("click", function() {
        const fonts = headers.selectedIndex
        console.log(headerArray[fonts])
        //change the style to the variable 
        blogContent.style.fontSize = headerArray[fonts]
    })

    //TEXT DECORATION
    //Bold text
    bold.addEventListener("click", function () {
        // const focus = blogContent.select()
        blogContent.style.fontWeight = "bold"
    })
    //turn off bold text
    bold.addEventListener("dblclick", function () {
        blogContent.style = "font-style: normal"
    })

    //Italicize text
    italic.addEventListener("click", function () {
        blogContent.style = "font-style: italic"
    })
    //turn off italics
    italic.addEventListener("dblclick", function () {
        blogContent.style = "font-style: normal"
    })

    //Underline text
    underline.addEventListener("click", function () {
        blogContent.style = "text-decoration-line: underline"
    })
    //turn off underline
    underline.addEventListener("dblclick", function () {
        blogContent.style = "font-style: normal"
    })

    //font change
    fontChange.addEventListener("click", function () {
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
        blog_content_1: blogContent1.value,
        blog_content_2: blogContent2.value,
        blog_content_3: blogContent3.value,
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
    location.href = "/"
    //run function to display to page
}

//reset the text after blog is submitted
function resetText() {
    blogTitle.value = ""
    blogContent.value = ""
    blogContent1.value = ""
    blogContent2.value = ""
    blogContent3.value = ""
    blogDescription.value = ""
}

submitBlog.addEventListener("click", addBlog)