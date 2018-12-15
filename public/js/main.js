fetch("https://api.github.com/users/GermanRodrickson")
  .then(response => {
    return response.json();
  })
  .then(data => {
    ok.style.display = "block";
    const username = document.querySelector("#username");
    const name = document.querySelector("#full-name");
    const bio = document.querySelector("#bio");

    name.innerHTML = data.name;
    username.innerHTML = data.login;
    bio.innerHTML = data.bio;

    console.log(data);

    if (data.message === "Not Found") {
      const notFound = document.querySelector("#not-found");
      const ok = document.querySelector("#ok");

      notFound.style.display = "block";
      ok.style.display = "none";
    }
  })
  .catch(err => {
    console.log("error ->", err);
  });

fetch("https://api.github.com/users/GermanRodrickson/repos")
  .then(response => {
    return response.json();
  })
  .then(data => {
    const reponame = document.querySelector("#repo-name");
    const stars = document.querySelector("#stars");
    const fork = document.querySelector("#fork");
    
    for (let i = 0; i < 5; i++) {
      reponame.innerHTML = data[i].name;
      stars.innerHTML = data[i].stargazers_count;
      fork.innerHTML = data[i].forks;
    }
  })
  .catch(err => {
    console.log("error ->", err);
  });



const text = document.getElementById("myText").value;

function myFunction(event) {
  event.preventDefault();
  console.log(text);
}
