const ul = document.querySelector("ul")

//create function to run on page load
const addBlogs = async () => {
  const blogs = await fetch('/api/blogs', {
    method: "GET",
  })

  const json = await blogs.json();
  console.log(json)

  return json;
}

const addLi = (listEl) => {
  //grabbing html elements for card
  const listOne = document.createElement("li");
  const cardDiv = document.createElement("div");
  const cardDivOne = document.createElement("div");
  const image = document.createElement("image");
  const cardDivTwo = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const createButton = document.createElement("button");
  const buttonDiv = document.createElement("div")

  //adding classes to the elements to style
  cardDiv.className = "card";
  cardDivOne.className = "card-div1";
  image.className = "image";
  cardDivTwo.className = "card-div2";
  buttonDiv.className = "read-more";

  //adding text to element
  h1.innerHTML = `${listEl.blogTitle}`;
  console.log(h1);
  h2.innerText = `${listEl.blogDescription}`;
  console.log(h2);
  createButton.textContent = "Read More"

  //set button href attribute
  createButton.setAttribute("href", "http://localhost:3000/api/blogs");
  console.log(createButton.setAttribute("href", "http://localhost:3000/api/blogs"));
  
  //append everything together
  ul.append(listOne);
  listOne.appendChild(cardDiv);
  cardDiv.appendChild(cardDivOne);
  cardDivOne.appendChild(image);
  cardDiv.appendChild(cardDivTwo);
  cardDivTwo.appendChild(h1);
  cardDivTwo.appendChild(h2);
  cardDivTwo.appendChild(buttonDiv)
  buttonDiv.appendChild(createButton)
}


function buttonHandler() {
  addBlogs().then((response) => response.forEach((item) => addLi(item)));
}

buttonHandler()
// addLi()
//fetch request for /api/blogs
//run a for loop
//display on page
//add styling to each instance 



// MODAL
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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

