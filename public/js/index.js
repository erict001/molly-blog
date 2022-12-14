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

// const addLi = (listEl) => {
//   //grabbing html elements for card
//   const listOne = document.createElement("li");
//   const cardDiv = document.createElement("div");
//   const cardDivOne = document.createElement("div");
//   const image = document.createElement("img");
//   const cardDivTwo = document.createElement("div");
//   const h1 = document.createElement("h1");
//   const h3 = document.createElement("h3");
//   const createButton = document.createElement("button");
//   const buttonDiv = document.createElement("div")

//   //adding classes to the elements to style
//   cardDiv.className = "card";
//   cardDivOne.className = "card-div1";
//   image.className = "image";
//   cardDivTwo.className = "card-div2";
//   buttonDiv.className = "read-more";

//   //adding text to element
//   image.setAttribute("src", `${listEl.blog_image}`)
//   h1.innerHTML = `${listEl.title}`;
//   console.log(h1);
//   h3.innerHTML = `${listEl.blog_description}`;
//   console.log(h3);
//   createButton.textContent = "Read More"

//   //set button href attribute
//   createButton.addEventListener("click", function () {
//     location.href = `/${listEl.blog_id}`
//   })

//   //append everything together
//   ul.append(listOne);
//   listOne.appendChild(cardDiv);
//   cardDivOne.append(image);
//   cardDivTwo.append(h1, h3);
//   cardDivTwo.appendChild(buttonDiv)
//   cardDiv.append(cardDivOne, cardDivTwo);
//   // cardDiv.appendChild(cardDivTwo);
//   buttonDiv.appendChild(createButton)
// }


// function buttonHandler() {
//   addBlogs()
//     .then((response) => response.forEach((item) => addLi(item)));
// }

// buttonHandler()



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