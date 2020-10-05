// import "./index.styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

(function () {
  const addTilesToDOM = function (parsedTilles) {
    const tillesSection =
      document.getElementsByClassName("mainSemanticElement__tilesSection") &&
      document.getElementsByClassName("mainSemanticElement__tilesSection")[0];

    for (
      let tilleNumber = 0;
      tilleNumber < parsedTilles.length;
      tilleNumber++
    ) {
      tillesSection.innerHTML += `
      <article id="tille_${parsedTilles[tilleNumber].id}" class="tille">
        <span class="tille__body"> ${parsedTilles[tilleNumber].name} </span>
        <span class="tille__footer"></span>
      </article>
      `;
    }
    return [parsedTilles, tillesSection];
  };

  const addClickEventListenerToTiles = function (arrayOfArguments) {
    const [parsedTilles] = arrayOfArguments;

    for (
      let tilleNumber = 0;
      tilleNumber < parsedTilles.length;
      tilleNumber++
    ) {
      const currentTille = document.getElementById(
        "tille_" + parsedTilles[tilleNumber].id
      );
      currentTille.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (window.confirm("Please confirm you want to delete this tille?")) {
          currentTille.parentNode.removeChild(currentTille);
        }
      });
    }
  };

  const getListOfUsers = function () {
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
      xhr.send();
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(new Error(xhr));
        }
      };
    });
  };

  getListOfUsers()
    .then(function (response) {
      return JSON.parse(response);
    })
    .then(addTilesToDOM)
    .then(addClickEventListenerToTiles)
    .catch(function (error) {});
})();

(function () {
  const getAlbumList = async function () {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    });
    if (response.status === 200) {
      let listOfAlbumsFromRESTApi = await response.json();
      listOfAlbumsFromRESTApi.splice(0, listOfAlbumsFromRESTApi.length - 10);
      console.log(listOfAlbumsFromRESTApi);

      // let listOfAmbumsArray = JSON.parse(listOfAlbumsFromRESTApi);
    }
  };

  getAlbumList();
})();
