function runProgram () {
    
  fetch("https://mindforge-final-1.onrender.com/podcasts/")
  .then((resp) => resp.json())
  .then((podcasts) => {

      getPodcastsQuery(podcasts);

      podcasts.forEach((podcast) => {

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

      });

  });

  fetch("https://mindforge-final-1.onrender.com/quotes/")
  .then((resp) => resp.json())
  .then((quotes) => {
      
      getQuotesQuery(quotes);

      quotes.forEach((quote) => {

          const quoteCol = document.createElement("div");
          quoteCol.classList.add("col");

          const quoteCard = document.createElement("div");
          quoteCard.classList.add("card")

          const quoteCardBody = document.createElement("div");
          quoteCardBody.classList.add("card-body")

          const blockQuote = document.createElement("blockquote");
          blockQuote.classList.add("blockquote");

          const quotedetail = document.createElement("p");
          quotedetail.innerHTML = quote.quote
          const quoteAuthor = document.createElement("p");
          quoteAuthor.classList.add("blockquote-footer");
          quoteAuthor.innerHTML = quote.author;

      });
  });

  fetch("https://mindforge-final-1.onrender.com/books/")
  .then((resp) => resp.json())
  .then((books) => {

      getBooksQuery(books);

      books.forEach((book) => {

          const bookCol = document.createElement("div");
            bookCol.classList.add("col");
 
          const bookCard = document.createElement("div");
            bookCard.classList.add("card");

            const bookImage = document.createElement("img");
            bookImage.classList.add("card-img-top");
            bookImage.src = book.image;
            bookImage.alt = book.title;
            console.log(bookImage);

            const bookBody = document.createElement("div");
            bookBody.classList.add("card-body");

            const bookTitle = document.createElement("h5");
            bookTitle.classList.add("card-title");
            bookTitle.innerHTML = book.title;
            const bookDesc = document.createElement("p");
            bookDesc.classList.add("card-text");
            bookDesc.innerHTML = book.description;
            console.log(bookDesc);

      });

  });

}

function getPodcastsQuery (podcasts) {

  podcasts.forEach((podcast) => {
      const searchInput = document.getElementById("search-input");
      const searchBtn = document.getElementById("search-btn");

      searchBtn.addEventListener("click", () => {
    
          let podcastName = searchInput.value;
          if (podcastName == podcast.category) {
              showPodcastDetails(podcast)
          };

          });
  })

}

function getQuotesQuery (quotes) {
  quotes.forEach((quote) => {
      const searchInput = document.getElementById("search-input");
      const searchBtn = document.getElementById("search-btn");

      searchBtn.addEventListener("click", () => {
    
          let quoteCat = searchInput.value;
          if (quoteCat == quote.category) {
              showquoteDetails(quote)
          };

          });
  })
}

function getBooksQuery (books) {
  books.forEach((book) => {
      const searchInput = document.getElementById("search-input");
      const searchBtn = document.getElementById("search-btn");

      searchBtn.addEventListener("click", () => {
    
          let bookCat = searchInput.value;
          if (bookCat == book.category) {
              showBookDetails(book)
          };

          });
  })
}

function showPodcastDetails (podcast) {
  const podcastRow = document.getElementById("podcast-row");
  const podcastCol = document.createElement("div");
            podcastCol.classList.add("col");

          podcastRow.innerHTML += "";
          podcastCol.innerHTML += " ";

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

            podcastCard.appendChild(podcastImage);
            podcastCard.appendChild(podcastBody);

            podcastCol.appendChild(podcastCard);
            podcastRow.appendChild(podcastCol);
}

function showquoteDetails (quote) {

  const quoteRow = document.getElementById("quote-row");
  const quoteCol = document.createElement("div");
            quoteCol.classList.add("col");

          quoteRow.innerHTML += "";
          quoteCol.innerHTML += " ";

          const quoteCard = document.createElement("div");
          quoteCard.classList.add("card")

          const quoteCardBody = document.createElement("div");
          quoteCardBody.classList.add("card-body")

          const blockQuote = document.createElement("blockquote");
          blockQuote.classList.add("blockquote");

          const quotedetail = document.createElement("p");
          quotedetail.innerHTML = quote.quote
          const quoteAuthor = document.createElement("p");
          quoteAuthor.classList.add("blockquote-footer");
          quoteAuthor.innerHTML = quote.author;

          blockQuote.appendChild(quotedetail);
          blockQuote.appendChild(quoteAuthor);

          quoteCardBody.appendChild(blockQuote);
          quoteCard.appendChild(quoteCardBody);

          quoteCol.appendChild(quoteCard);
          quoteRow.appendChild(quoteCol);

}

function showBookDetails (book) {
  const bookRow = document.getElementById("book-row");
  const bookCol = document.createElement("div");
            bookCol.classList.add("col");

          bookRow.innerHTML += "";
          bookCol.innerHTML += " ";

            const bookCard = document.createElement("div");
            bookCard.classList.add("card");

            const bookImage = document.createElement("img");
            bookImage.classList.add("card-img-top");
            bookImage.src = book.image;
            bookImage.alt = book.title;
            console.log(bookImage);

            const bookBody = document.createElement("div");
            bookBody.classList.add("card-body");

            const bookTitle = document.createElement("h5");
            bookTitle.classList.add("card-title");
            bookTitle.innerHTML = book.title;
            const bookDesc = document.createElement("p");
            bookDesc.classList.add("card-text");
            bookDesc.innerHTML = book.description;
            console.log(bookDesc);

            bookBody.appendChild(bookTitle);
            bookBody.appendChild(bookDesc);

            bookCard.appendChild(bookImage);
            bookCard.appendChild(bookBody);

            bookCol.appendChild(bookCard);
            bookRow.appendChild(bookCol);
}

runProgram()