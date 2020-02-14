// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// API GET request
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    // success
    .then(response => {
        console.log("second console.log", response.data);
        // select articles under response.data node
        const articles = response.data;
        // call a function (defined below) to add the elements to the page
        article(articles);
    })
    // error
    .catch(function (error) {
        console.log(error);
    });

// Create a function that is invoked when the API request is made. This function is used to layout the article elements on the page.
function article(articles) {
    // define object array
    const articleContent = articles.articles;
    console.log("third console.log", articleContent);
    // for...in statement will iterate over all properties of the object
    for (var key in articleContent) {
        console.log("fourth console.log", key, articleContent[key]);
        // iterate over the items
        articleContent[key].forEach(element => {
            // console.log(element);

            // create the card element
            const card = document.createElement('div');
            card.classList.add('card');

            // create the headline element
            const headline = document.createElement('div');
            headline.classList.add('headline');
            headline.textContent = element.headline;
            card.appendChild(headline);

            // create the author element
            const author = document.createElement('div');
            author.classList.add('author');
            author.textContent = element.authorName;
            card.appendChild(author);

            // create the imageContainer element
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('img-container');
            author.appendChild(imageContainer);

            // create the authorImage element
            const authorImage = document.createElement('img');
            authorImage.src = element.authorPhoto;
            imageContainer.appendChild(authorImage);

            // create the authorName element
            const authorName = document.createElement('span');
            authorName.textContent = element.authorName;
            author.appendChild(authorName);

            // console.log(card)
            // select the parent container and appendChild
            const cardsDiv = document.querySelector('.cards-container');
            cardsDiv.appendChild(card);
        });
      };
};