// const uploader = Uploader({
//     apiKey: "free"
// });

// grabbing blog values
const blogTitle = document.getElementById("blog-title")
const blogContent = document.getElementById("blog-content")
const contentSelector = document.getElementById("contentSelector")
const blogDescription = document.getElementById("blog-description")
const blogContent1 = document.getElementById("blog-content-1")
const blogContent2 = document.getElementById("blog-content-2")
const blogContent3 = document.getElementById("blog-content-3")
const blogBtn = document.getElementById("blogButton")

// add media to SQL database
const media = document.getElementById("add-media")

//allowing change to adjust blog_content based on user selection
const blogSelector = document.getElementById("contentSelector")
const blogButton = document.getElementById("blogButton")
const blogChoice = ["bg1", "bg2", "bg3", "bg4", "bg5"]

//Tags added to Blog
const app = document.getElementById("apps")
const entrees = document.getElementById("entrees")
const desserts = document.getElementById("desserts")
const wine = document.getElementById("wine")
const veggie = document.getElementById("veggie")
const life = document.getElementById("life")
const items = document.querySelectorAll(".items")



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

blogBtn.addEventListener("click", function(){
    console.log(contentSelector.value)
})

let menu = []

function addTheme() {
    menu.push(items.value)
    console.log(menu)
}

app.addEventListener("click", function(){
    menu.push("Appetizers")
    console.log(menu) 
})
entrees.addEventListener("click", function(){
    menu.push("Entrees")
    console.log(menu) 
})
desserts.addEventListener("click", function(){
    menu.push("Desserts")
    console.log(menu) 
})
wine.addEventListener("click", function(){
    menu.push("Wine")
    console.log(menu) 
})
veggie.addEventListener("click", function(){
    menu.push("Vegetarian")
    console.log(menu) 
})
life.addEventListener("click", function(){
    menu.push("Lifestyle")
    console.log(menu) 
})

//event listener to activate button
media.addEventListener("click", function () {
    uploader.open({ multi: true }).then(files => {
        if (files.length === 0) {
            console.log('No files selected.')
        } else {
            console.log('Files uploaded:');
            console.log(files.map(f => f.fileUrl));
            imageUrl.push(files[0].fileUrl);
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

function addBlog(event) {
    event.preventDefault()

    let menuItems = "";

    for (let i = 0; i < menu.length; i++){
        menuItems = menu[i]
        console.log(menuItems)
    }

    //create new item using an object method
    let newBlog = {
        title: blogTitle.value,
        blog_type: menuItems,
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
    menu = []
    blogTitle.value = ""
    blogContent.value = ""
    blogContent1.value = ""
    blogContent2.value = ""
    blogContent3.value = ""
    blogDescription.value = ""
}

submitBlog.addEventListener("click", addBlog)