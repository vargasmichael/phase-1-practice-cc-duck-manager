
    fetch('http://localhost:3000/ducks')
    .then(response => response.json())
    .then(photo =>{
        
//render duck photos to page
        renderDucks(photo);

        renderDetails(photo[0]);
    })

    function renderDucks(photo) {
        let duckDetail = document.querySelector("#duck-nav");
        photo.forEach(photo => { 
            let duckPhotos = document.createElement("img");
            duckPhotos.src = photo.img_url;
            duckDetail.append(duckPhotos);
            
            duckPhotos.addEventListener("click", () => {
                renderDucks(photo);
     })
    })
    }

function renderDetails(duckPhotos){
    duckImage = duckPhotos;
    
    let img_url = document.querySelector('#duck-display-image') 
    let name  = document.querySelector('#duck-display-name')
    let likes = document.querySelector('#duck-display-likes')
    
    img_url.src = duckImage.img_url;
    name.textContent = duckImage.name;
    likes.textContent = duckImage.like;
    
}
