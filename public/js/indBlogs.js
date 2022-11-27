// const title = document.querySelector("h1")


// const addBlogs = async () => {
//     const blogs = await fetch('/api/blogs:id', {
//         method: "GET",
//     })
//     const json = await blogs.json();
//     console.log(json)

//     return json;
// }


// const addLi = (listEl) => {
//     //grabbing html elements for card
//     const listOne = document.createElement("li");
//     const cardDiv = document.createElement("div");
//     const cardDivOne = document.createElement("div");
//     const image = document.createElement("image");
//     const cardDivTwo = document.createElement("div");
//     const h1 = document.createElement("h1");
//     const h3 = document.createElement("h3");
//     const createButton = document.createElement("button");
//     const buttonDiv = document.createElement("div")

//     //adding classes to the elements to style
//     cardDiv.className = "card";
//     cardDivOne.className = "card-div1";
//     image.className = "image";
//     cardDivTwo.className = "card-div2";
//     buttonDiv.className = "read-more";

//     //adding text to element
//     h1.innerHTML = `${listEl.title}`;
//     console.log(h1);
//     h3.innerHTML = `${listEl.blog_description}`;
//     console.log(h3);
//     createButton.textContent = "Read More"

//     //set button href attribute
//     createButton.addEventListener("click", function () {
//         location.href = `/${listEl.blog_id}`
//     })

//     //append everything together
//     ul.append(listOne);
//     listOne.appendChild(cardDiv);
//     cardDiv.appendChild(cardDivOne);
//     cardDivOne.appendChild(image);
//     cardDiv.appendChild(cardDivTwo);
//     cardDivTwo.appendChild(h1);
//     cardDivTwo.appendChild(h3);
//     cardDivTwo.appendChild(buttonDiv)
//     buttonDiv.appendChild(createButton)
// }


// function buttonHandler() {
//     addBlogs()
//         .then((response) => response.forEach((item) => addLi(item)));
// }

// buttonHandler()