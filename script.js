document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

//   searchBtn.addEventListener("clicked", () => {

    // console.log("clicked");

    // PODCAST

  fetch("http://localhost:3000/podcasts")
    .then((resp) => resp.json())
    .then((data) => {

        // let searchInput = "productivity"
        let searchValue = "productivity";

        // let relationships = Object.keys(data)[0];
        // let productivity = Object.values(data)[1];
        // let lifeStories = Object.values(data)[2];
        // let successHabits = Object.values(data)[3];
        // let manifestation = Object.values(data)[4]
        // let confidence = Object.values(data)[5];

        // let money = Object.keys(data)[6];

        // console.log(relationships);


        // if (relationships === "relationships") {

      Object.values(data)[0].forEach(category => {
        console.log(category);
        console.log(category.image);

        const podcastCol = document.getElementById("podcast-col");

        podcastCol.innerHTML += `
        
        <div class="col" > 
            <div class="card">
              <img
                src="${category.image}"
                alt="${category.title}"
              />
              <div class="card-body">
                <h5 class="card-title" id="podcast-title">
                  ${category.title}
                </h5>
                <p class="card-text">
                  ${category.description}
                </p>
                <a href="${category.link}" target="_blank" class="icon-box me-4">
                <i class="ri-youtube-fill"></i>
                </a>
                <a href="#" class="icon-box me-4">
                  <i class="ri-share-fill"></i>
                </a>
              </div>
            </div>
          </div> 

        `
        
      });
    // }
    })
    .catch(err => {
        console.log(err, "error")
    });


// QUOTES

fetch("http://localhost:3000/quotes")
.then((resp) => resp.json())
.then((data) => {

    Object.values(data)[0].forEach(category => {
        console.log(category);
        console.log(category.quote);


        const quoteCol = document.getElementById("quote-col");

        quoteCol.innerHTML += `
        
        <div class="col">
            <div class="card">
              <div class="card-body" id="quote-body">
                <blockquote class="blockquote mb-0" id="quote-block">
                  <p>
                    ${category.quote}
                  </p>
                  <p class="blockquote-footer">${category.author}</p> 
                </blockquote>
                <a href="#" class="icon-box me-4">
                  <i class="ri-share-fill"></i>
                </a>
              </div>
            </div>
          </div>

        `

})

});


// BOOKS \\

fetch("http://localhost:3000/books")
.then((resp) => resp.json())
.then((data) => {

    Object.values(data)[6].forEach(category => {
        console.log(category);
        console.log(category.summary);


        const bookCol = document.getElementById("book-col");

        bookCol.innerHTML += `
        
        <div class="col">
            <div class="card">
              <img
                src=${category.image}
                alt=${category.title}
              />
              <div class="card-body">
                <h5 class="card-title">
                    ${category.title}
                </h5>
                <p class="card-text">
                    ${category.summary}
                </p>
                <p class="blockquote-footer">${category.author}</p> 
                <a href="#" class="icon-box me-4">
                    <i class="ri-amazon-fill"></i>
                </a>
                <a href="#" class="icon-box me-4">
                    <i class="ri-share-fill"></i>
                </a>
              </div>
            </div>
          </div>

        `
    })
})



// });

})
