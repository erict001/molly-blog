const ul = document.querySelector("ul")

//create function to run on page load
function addBlogs() {
  const blogs = fetch('/api/blogs', {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })
  console.log(blogs);

}
  
addBlogs()

function addLi() {
  //grabbing html elements for card
  const listOne = document.createElement("li");
  const cardDiv = document.createElement("div");
  const cardDivOne = document.createElement("div");
  const image = document.createElement("image");
  const cardDivTwo = document.createElement("div");
  const h1 = document.createElement("h1");
  
  //adding classes to the elements to style
  cardDiv.className = "card";
  cardDivOne.className = "card-div1";
  image.className = "image";
  cardDivTwo.className = "card-div2";

  //adding text to element
  h1.textContent = "Here is our first blog"

  //append everything together
  ul.append(listOne);
  listOne.appendChild(cardDiv);
  cardDiv.appendChild(cardDivOne);
  cardDivOne.appendChild(image);
  cardDiv.appendChild(cardDivTwo);
  cardDivTwo.appendChild(h1)
  
  // listOne.textContent = "This is list one";
}

addLi()
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
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

changePage.addEventListener("click", function(){
    location.href="/add-post"
})

