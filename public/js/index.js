// const router = require("express").Router();
const ul = document.querySelector("ul")
const circle = document.getElementById("circle")

circle.addEventListener("click", function () {
  location.href = "/"
})

//create function to run on page load
const addBlogs = async () => {
  const blogs = await fetch('/api/blogs', {
    method: "GET",
  })
  const json = await blogs.json();
  console.log(json)

  return json;
}

// MODAL
// Get the modal
const modal = document.getElementById("myModal");
// Get the button that opens the modal
const btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const changePage = document.getElementById("redirect")

// When the user clicks on the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

changePage.addEventListener("click", function () {
  location.href = "/add-post"
})

// module.exports = router