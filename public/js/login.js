console.log("linked")

document.querySelector('.login-form').addEventListener("submit",event => {
  event.preventDefault();

  const userObj = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  }
  console.log(userObj)

  fetch("/api/users/login", {
    method: 'POST',
    body: JSON.stringify(userObj),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.ok) {
      location.href = '/'
    } else {
      alert("failed")
    }
  })
});