const card = document.querySelectorAll(".card");
for (let i = 0; i < card.length; i++) {
  card[i].remove();
}

const loadimages = async (searchfor) => {
  const load_images = document.querySelector("#loadimages");

  load_images.addEventListener("click", function () {
    fetch(`http://www.splashbase.co/api/v1/images/search?query=${searchfor}`)
      .then((response) => response.json())
      .then((albumimages) => {
        console.log(albumimages.images);

        let row = document.getElementById("rowimages");
        for (let i = 0; i < albumimages.images.length; i++) {
          const col = document.createElement("div");
          col.className = "col col-md-4";
          let card = document.createElement("div");
          card.innerHTML = `<div class="card  mb-4 shadow-sm">
            <img src="${albumimages.images[i].url}" class="card-img-top" alt="..."/>
            <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
        </div> 
        `;
          col.appendChild(card);
          row.appendChild(col);
        }
      })

      .catch((err) => {
        console.error(err);
      });
  });
};
loadimages("computer");

const secondloadimages = async (info) => {
  const load_images = document.querySelector("#secondimages");

  load_images.addEventListener("click", function () {
    fetch(`http://www.splashbase.co/api/v1/images/search?query=${info}`)
      .then((response) => response.json())
      .then((album) => {
        console.log(album.images);

        for (let i = 0; i < album.images.length; i++) {
          let cardimg = document.querySelectorAll(".card > img");
          cardimg[i].src = `${album.images[i].url}`;
          cardimg[i].style = "object-fit:cover;width:100%;height:200px;"
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

secondloadimages("cars");


// const loadImagesIntoCards = ({images}) => {
//    const cards  = document.querySelectorAll(".card");
//    for(let i =0; i<cards.length; i++) {
//      const card = cards[i];
//      card.firstElementChild.remove();
//      const img = document.createElement("img");
//      img.src=images[i].url;
//      img.style="object-fit:cover;width:100%;height:200px;"
//      card.innerHTML=`${img.outerHTML} ${card.innerHTML}` //

//    }
//  }

// const getImagesFromAPI = (query) => {
//    fetch(`http://www.splashbase.co/api/v1/images/search?query=${query}`)
//    .then((response) => response.json())
//    .then(loadImagesIntoCards)
//    .catch(console.log)
// }
// document.querySelector("#loadimages").addEventListener("click", loadImagesIntoCards('computer'));