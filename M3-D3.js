const card = document.querySelectorAll('.card')
for(let i=0;i< card.length;i++){

   card[i].remove()
   
}

const loadimages = async (searchfor) => {
   const load_images = document.querySelector('#loadimages');
   
   load_images.addEventListener('click', function(){
   
      fetch(`http://www.splashbase.co/api/v1/images/search?query=${searchfor}`)
      .then (response => response.json()).then(albumimages=>{
          console.log(albumimages.images)
        
          let row = document.getElementById('rowimages')
         for(let i=0;i<albumimages.images.length;i++) {
              const col = document.createElement('div')
              col.className='col'
              let card = document.createElement('div')
            card.innerHTML=`<div class="card">
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
            
      };
   })
      
       
   // .catch((err) => {
   //    console.error(err);
   //  });
          
})
}
loadimages('computer');

