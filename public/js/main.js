fetch("https://api.github.com/users/GermanRodrickson")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // const name = document.querySelector("#demo");
    // let image = document.querySelector("#image");
    // name.innerHTML = data.name;
    // image.style.backgroundImage = "url('data.avatar_url')";

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

const text = document.getElementById("myText").value;

function myFunction(event) {
  event.preventDefault();
  console.log(text);
}
