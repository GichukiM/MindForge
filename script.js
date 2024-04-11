document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const podcastRow = document.getElementById("podcast-row");
  const quoteCol = document.getElementById("quote-col");
  const bookCol = document.getElementById("book-col");

  //    Function to fetch Podcast Data

  const getPodcast = () => {
    searchBtn.addEventListener("click", (ev) => {
      ev.preventDefault();

      let podcastName = searchInput.value;
      let podcastUrl = `https://mindforge-final-1.onrender.com/podcasts/`;

      fetch(podcastUrl)
        .then((resp) => resp.json())
        .then((data) => {
          // console.log(data);
          // console.log( Object.keys.value)
          data.forEach((podcast) => {
            //   console.log(podcast.category);

            if (podcast.category == podcastName) {
              const podcastCol = document.createElement("div");
              podcastCol.classList.add("col");

              const podcastCard = document.createElement("div");
              podcastCard.classList.add("card");

              const podcastImage = document.createElement("img");
              podcastImage.classList.add("card-img-top");
              podcastImage.src = podcast.image;
              podcastImage.alt = podcast.title;
              console.log(podcastImage);

              const podcastBody = document.createElement("div");
              podcastBody.classList.add("card-body");

              const podcastTitle = document.createElement("h5");
              podcastTitle.classList.add("card-title");
              podcastTitle.innerHTML = podcast.title;
              const podcastDesc = document.createElement("p");
              podcastDesc.classList.add("card-text");
              podcastDesc.innerHTML = podcast.description;
              console.log(podcastDesc);

              podcastBody.appendChild(podcastTitle);
              podcastBody.appendChild(podcastDesc);

              podcastCard.appendChild(podcastBody);
              podcastCard.appendChild(podcastImage);

              podcastCol.appendChild(podcastCard);
              podcastRow.appendChild(podcastCol);
            }
          });
        });
    });
  };

  const getQuote = () => {
    searchBtn.addEventListener("click", (ev) => {
      ev.preventDefault();

      let quoteName = searchInput.value;
      let quoteUrl = `https://mindforge-final-1.onrender.com/quotes/`;

      if (quoteName.length <= 0) {
        quoteCol.innerHtml = `
            <div class="col" > 
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title" id="podcast-title">
                   Please Enter a Category
                  </h5>
                </div>
              </div>
            </div> 
            `;
      }

      //   If Input field is not empty
      else {
        fetch(quoteUrl)
          .then((resp) => resp.json())
          .then((data) => {
            // console.log(data);
            // console.log( Object.keys.value)
            data.forEach((quote) => {
              //   console.log(quote.category);
              if (quote.category == quoteName) {
                // console.log(quote);

                quoteCol.innerHTML += `

                  <div class="col">
                             <div class="card">
                              <div class="card-body" id="quote-body">
                              <blockquote class="blockquote mb-0" id="quote-block">
                                   <p>
                                      ${quote.quote}
                                    </p>
                                  <p class="blockquote-footer">${quote.author}</p> 
                                 </blockquote>
                                  <a href="#" class="icon-box me-4">
                                   <i class="ri-share-fill"></i>
                                </a>
                                </div>
                              </div>
                            </div>

          `;
              }
            });
          });
      }

      //   searchBtn.reset();
    });
  };

  const getBook = () => {
    searchBtn.addEventListener("click", (ev) => {
      ev.preventDefault();

      let bookName = searchInput.value;
      let bookUrl = `https://mindforge-final-1.onrender.com/books/`;

      if (bookName.length <= 0) {
        bookCol.innerHtml = `
              <div class="col" > 
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title" id="podcast-title">
                     Please Enter a Category
                    </h5>
                  </div>
                </div>
              </div> 
              `;
      }

      //   If Input field is not empty
      else {
        fetch(bookUrl)
          .then((resp) => resp.json())
          .then((data) => {
            // console.log(data);
            // console.log( Object.keys.value)
            data.forEach((book) => {
              //   console.log(book.category);
              if (book.category == bookName) {
                // console.log(book);

                bookCol.innerHTML += `
  
                  <div class="col">
                              <div class="card">
                               <img
                                   src=${book.image}
                                   alt=${book.title}
                                 />
                                 <div class="card-body">
                                   <h5 class="card-title">
                                       ${book.title}
                                   </h5>
                                   <p class="card-text">
                                       ${book.summary}
                                   </p>
                                   <p class="blockquote-footer">${book.author}</p> 
                                   <a href="#" class="icon-box me-4">
                                       <i class="ri-amazon-fill"></i>
                                   </a>
                                   <a href="#" class="icon-box me-4">
                                       <i class="ri-share-fill"></i>
                                   </a>
                                 </div>
                               </div>
                             </div>
  
            `;
              }
            });
          });
      }

      // searchBtn.reset();
    });
  };

  getPodcast();
  getQuote();
  getBook();
});
