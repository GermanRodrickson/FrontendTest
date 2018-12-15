'use strict';

function myFunction(event) {
  const value = document.getElementById("valueInput").value;
  event.preventDefault();
  fetchData(value)
}

function fetchData(value) {
  fetch(`https://api.github.com/users/${value}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      ok.style.display = "block";

      const username = document.querySelector("#username");
      const name = document.querySelector("#full-name");
      const bio = document.querySelector("#bio");
      const image = document.querySelector("#image");
  
      name.innerHTML = data.name;
      username.innerHTML = data.login;
      bio.innerHTML = data.bio;
      image.src = data.avatar_url;
  
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
  
  fetch(`https://api.github.com/users/${value}/repos`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      for (let i = 0; i < 5; i++) {
        const reponame = document.querySelector("#repo-name");
        const stars = document.querySelector("#stars");
        const fork = document.querySelector("#fork");
        const repositories = document.querySelector("#repositories");
  
        const reponameData = (reponame.innerHTML = data[i].name);
        const starsData = (stars.innerHTML = data[i].stargazers_count);
        const forkData = (fork.innerHTML = data[i].forks);
  
        const repo =
          '<div class="repo"> <p id="repo-name">' +
          reponameData +
          '</p><div class="starts-forks"><img src="./img/star-solid.svg" alt="star"><p id="stars">' +
          starsData +
          '</p><img src="./img/code-branch-solid.svg" alt="fork"><p id="fork">' +
          forkData +
          "</p></div></div>";
  
        repositories.innerHTML += repo;
      }
    })
    .catch(err => {
      console.log("error ->", err);
    });
  
}


