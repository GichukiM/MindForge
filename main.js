const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const contactForm = document.getElementById("contact-form");

async function loadResources() {
  try {
    const pResponse = await fetch(
      "https://mindforge-final-1.onrender.com/podcasts/"
    );
    const qResponse = await fetch(
      "https://mindforge-final-1.onrender.com/quotes/"
    );
    const bResponse = await fetch(
      "https://mindforge-final-1.onrender.com/books/"
    );

    const pResults = await pResponse.json();
    const qResults = await qResponse.json();
    const bResults = await bResponse.json();

    searchBtn.addEventListener("click", (ev) => {
      ev.preventDefault();

      let search = searchInput.value.toLowerCase();

      // console.log(search);

      pResults.forEach((podcast) => {
        const podcastCol = document.getElementById("podcast-row");

        if (search == podcast.category) {
          podcastCol.innerHTML += `
        
        <div class="col" > 
            <div class="card">
              <img
                src="${podcast.image}"
                alt="${podcast.title}"
              />
              <div class="card-body">
                <h5 class="card-title" id="podcast-title">
                  ${podcast.title}
                </h5>
                <p class="card-text">
                  ${podcast.description}
                </p>
                <a href="${podcast.link}" target="_blank" class="icon-box me-4">
                <i class="ri-youtube-fill"></i>
                </a>
              </div>
            </div>
          </div> 

        `;
        }
        //   console.log(podcast.title);
      });

      qResults.forEach((quote) => {
        const quoteCol = document.getElementById("quote-row");

        if (search == quote.category) {
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
              </div>
              </div>
          </div>
  
          `;
        }
        console.log(quote.author);
      });

      bResults.forEach((book) => {
        const bookCol = document.getElementById("book-row");

        if (search == book.category) {
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
                </div>
              </div>
            </div>
  
          `;
        }
      });

      searchInput.value = "";
    });
  } catch (err) {
    console.log("err");
    console.log(err);
  }
}

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
                    placeholder="Podcast Image"
                    name="image"
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

      form.reset();
    }
  });

  quoteBtn.addEventListener("click", () => {
    console.log("Clicked");

    addHeading.innerHTML = "ADD A QUOTE";
    addText.innerHTML = "We'd love to get inspired by a quote";

    formDiv.innerHTML = `
      
      <div class="col-lg-8">
              <form action="#" class="row g-3 p-4 p-lg-5 bg-white theme-shadow" id="book-form">
                <div class="form-group col-lg-12">
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
                    placeholder="Quote Category"
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

      form.reset();
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

      form.reset();
    }
  });
}

async function handleSubmit(event) {
  event.preventDefault();
  let status = document.getElementById("my-form-status");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: contactForm.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        contactForm.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}

contactForm.addEventListener("submit", handleSubmit);

formToggler();
loadResources();
