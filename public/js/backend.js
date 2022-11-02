const bold = document.getElementById("bold")
const blogContent = document.getElementById("blog-content")
const pageChange = document.getElementById("pageChange")

bold.addEventListener("click", boldText)

function boldText() {
    blogContent.style.fontWeight = "bold"
}


pageChange.addEventListener("click", function(){
    location.href="/"
})