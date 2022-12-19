const addTextBox1 = document.getElementById("addTextBox")
const addTextBox2 = document.getElementById("addTextBox2")
const addTextBox3 = document.getElementById("addTextBox3")
const box = document.getElementById("box")
const hidden1 = document.querySelector(".hidden1")
const hidden2 = document.querySelector(".hidden2")
const hidden3 = document.querySelector(".hidden3")


addTextBox1.addEventListener("click", function(){
    hidden1.classList.remove("hidden1");
    hidden1.style = "display:flex"
})

addTextBox2.addEventListener("click", function(){
    hidden2.classList.remove("hidden2");
    hidden2.style = "display:flex"
})

addTextBox3.addEventListener("click", function(){
    hidden3.classList.remove("hidden3");
    hidden3.style = "display:flex"
})