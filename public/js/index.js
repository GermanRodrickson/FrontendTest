'use strict';

const username = document.querySelector("#username");
const name = document.querySelector("#full-name");
const bio = document.querySelector("#bio");
const image = document.querySelector("#image");
const notFound = document.querySelector("#not-found");
const ok = document.querySelector("#ok");
const search = document.querySelector("#search");

search.addEventListener('click', handleClick)

function handleClick(event) {
  const value = document.getElementById("valueInput").value;
  event.preventDefault();
  resetNotFound();
  fetchData(value);
}

function resetNotFound() {
  notFound.style.display = "none";
}

function fetchData(value) {
  fetch(`https://api.github.com/users/${value}`)
    .then(response => {
      return response.json();
    })
    .then(data => {  
      name.innerHTML = data.name;
      username.innerHTML = data.login;
      bio.innerHTML = data.bio;
      image.src = data.avatar_url;
      ok.style.display = "block";

      if (data.message === "Not Found") {
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
      const repos = data.map( repo => {
        const reponame = repo.name;
        const stars = repo.stargazers_count;
        const fork = repo.forks;
        return `<div class="repo">
            <p id="repo-name">${reponame}</p>
            <div class="starts-forks">
              <img src="./img/star-solid.svg" alt="star"><p>${stars}</p>
              <img src="./img/code-branch-solid.svg" alt="fork"><p>${fork}</p>
            </div>
        </div>`;
      });
      const repositories = document.querySelector("#repositories");
      repositories.insertAdjacentHTML('beforeend', repos.join(''));
    })
    .catch(err => {
      console.log("error ->", err);
    }); 
}


