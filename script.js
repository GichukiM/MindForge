function runProgram() {
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
        quoteCard.classList.add("card");

        const quoteCardBody = document.createElement("div");
        quoteCardBody.classList.add("card-body");

        const blockQuote = document.createElement("blockquote");
        blockQuote.classList.add("blockquote");

        const quotedetail = document.createElement("p");
        quotedetail.innerHTML = quote.quote;
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
        bookDesc.innerHTML = book.summary;
        console.log(bookDesc);
      });
    });
}

function getPodcastsQuery(podcasts) {
  podcasts.forEach((podcast) => {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let podcastName = searchInput.value;
      if (podcastName == podcast.category) {
        showPodcastDetails(podcast);
      }
    });
  });
}

function getQuotesQuery(quotes) {
  quotes.forEach((quote) => {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let quoteCat = searchInput.value;
      if (quoteCat == quote.category) {
        showquoteDetails(quote);
      }
    });
  });
}

function getBooksQuery(books) {
  books.forEach((book) => {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let bookCat = searchInput.value;
      if (bookCat == book.category) {
        showBookDetails(book);
      }
    });
  });
}

function showPodcastDetails(podcast) {
  const podcastRow = document.getElementById("podcast-row");
  const podcastCol = document.createElement("div");
  podcastCol.classList.add("col");

  podcastRow.innerHTML += "";
  podcastCol.innerHTML = " ";

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

function showquoteDetails(quote) {
  const quoteRow = document.getElementById("quote-row");
  const quoteCol = document.createElement("div");
  quoteCol.classList.add("col");

  quoteRow.innerHTML += "";
  quoteCol.innerHTML += " ";

  const quoteCard = document.createElement("div");
  quoteCard.classList.add("card");

  const quoteCardBody = document.createElement("div");
  quoteCardBody.classList.add("card-body");

  const blockQuote = document.createElement("blockquote");
  blockQuote.classList.add("blockquote");

  const quotedetail = document.createElement("p");
  quotedetail.innerHTML = quote.quote;
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

function showBookDetails(book) {
  const bookRow = document.getElementById("book-row");
  const bookCol = document.createElement("div");
  bookCol.classList.add("col");

  bookRow.innerHTML += " ";
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
  bookDesc.innerHTML = book.summary;
  console.log(bookDesc);

  bookBody.appendChild(bookTitle);
  bookBody.appendChild(bookDesc);

  bookCard.appendChild(bookImage);
  bookCard.appendChild(bookBody);

  bookCol.appendChild(bookCard);
  bookRow.appendChild(bookCol);
}

// Function to toggloe between Forms and to submit new content

function formToggler() {
  const podcastBtn = document.getElementById("podcast-Btn");
  const quoteBtn = document.getElementById("quote-Btn");
  const bookBtn = document.getElementById("book-Btn");
  const formDiv = document.getElementById("formDiv");
  const addHeading = document.getElementById("addHeading");
  const addText = document.getElementById("addText");

  // console.log(podcastBtn);

  podcastBtn.addEventListener("click", () => {
    console.log("clicked");

    addHeading.innerHTML = "ADD A PODCAST";
    addText.innerHTML = "We'd love to listen to your podcast suggestion";

    formDiv.innerHTML = `

    <div class="col-lg-8">
            <form action="#" class="row g-3 p-4 p-lg-5 bg-white theme-shadow" id="book-form">
              <div class="form-group col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Podcast Title"
                  name="title"
                />
              </div>
              <div class="form-group col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Podcast Host"
                  name="host"
                />
              </div>
              <div class="form-group col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Podcast Guest"
                  name="guest"
                />
              </div>
              <div class="form-group col-lg-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Podcast Image"
                  name="image"
                />
              </div>
              <div class="form-group col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Podcast Link"
                  name="link"
                />
              </div>
              <div class="form-group col-lg-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Podcast Category"
                  name="category"
                />
              </div>
              <div class="form-group col-lg-12">
                <textarea
                  name="description"
                  rows="5"
                  class="form-control"
                  placeholder="In your own words write a description"
                ></textarea>
              </div>
              <div class="form-group col-lg-12 d-grid">
                <button class="btn btn-brand">Add Podcast</button>
              </div>
            </form>
          </div>
    `;

    let form = document.getElementById("book-form");
    form.addEventListener("submit", handleSubmit);

    function handleSubmit(e) {
      e.preventDefault();
      let formData = new FormData(form);
      let data = Object.fromEntries(formData);
      let jsonData = JSON.stringify(data);

      fetch("https://mindforge-final-1.onrender.com/podcasts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      })
        .then((resp) => resp.json())
        .then((result) => console.log(result))
        .catch((err) => console.log(err));

      // e.reset();
    }
  });

  quoteBtn.addEventListener("click", () => {
    console.log("Clicked");

    addHeading.innerHTML = "ADD A QUOTE";
    addText.innerHTML = "We'd love to get inspired by a quote";

    formDiv.innerHTML = `
    
    <div class="col-lg-8">
            <form action="#" class="row g-3 p-4 p-lg-5 bg-white theme-shadow" id="book-form">
              <div class="form-group col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Quote Author"
                  name="author"
                />
              </div>
              <div class="form-group col-lg-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Podcast Category"
                  name="category"
                />
              </div>
              <div class="form-group col-lg-12">
              <textarea
                name="quote"
                rows="5"
                class="form-control"
                placeholder="Share an Inspiring Quote"
              ></textarea>
            </div>
              <div class="form-group col-lg-12 d-grid">
                <button class="btn btn-brand">Add Quote</button>
              </div>
            </form>
          </div>

    `;

    let form = document.getElementById("book-form");
    form.addEventListener("submit", handleSubmit);

    function handleSubmit(e) {
      e.preventDefault();
      let formData = new FormData(form);
      let data = Object.fromEntries(formData);
      let jsonData = JSON.stringify(data);

      fetch("https://mindforge-final-1.onrender.com/quotes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      })
        .then((resp) => resp.json())
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  });

  bookBtn.addEventListener("click", () => {
    console.log("clicked");

    addHeading.innerHTML = "ADD A BOOK";
    addText.innerHTML = "We'd love to read your book suggestion";

    formDiv.innerHTML = `
    
     <div class="col-lg-8">
            <form action="#" class="row g-3 p-4 p-lg-5 bg-white theme-shadow" id="book-form">
              <div class="form-group col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Book Title"
                  name="title"
                />
              </div>
              <div class="form-group col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Book Author"
                  name="author"
                />
              </div>
              <div class="form-group col-lg-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Book Image"
                  name="image"
                />
              </div>
              <div class="form-group col-lg-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Book Category"
                  name="category"
                />
              </div>
              <div class="form-group col-lg-12">
                <textarea
                  name="summary"
                  rows="5"
                  class="form-control"
                  placeholder="In your own words write a summary"
                ></textarea>
              </div>
              <div class="form-group col-lg-12 d-grid">
                <button class="btn btn-brand">Add Book</button>
              </div>
            </form>
          </div>

    `;

    let form = document.getElementById("book-form");
    form.addEventListener("submit", handleSubmit);

    function handleSubmit(e) {
      e.preventDefault();
      let formData = new FormData(form);
      let data = Object.fromEntries(formData);
      let jsonData = JSON.stringify(data);

      fetch("https://mindforge-final-1.onrender.com/books/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      })
        .then((resp) => resp.json())
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  });
}

formToggler();

runProgram();
