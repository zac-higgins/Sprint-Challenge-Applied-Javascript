// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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

const cardsContainer = document.querySelector('.cards-container');

function card(obj){
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const newheadline = document.createElement('div');
    newheadline.classList.add('headline');
    newheadline.textContent = obj.headline;
    newCard.appendChild(newheadline);

    const newAuthor = document.createElement('div');
    newAuthor.classList.add('author');
    newCard.appendChild(newAuthor);

    const newImgContainer = document.createElement('div');
    newImgContainer.classList.add('img-container');
    newAuthor.appendChild(newImgContainer);

    const newImg = document.createElement('img');
    newImg.src = obj.authorPhoto;
    newImgContainer.appendChild(newImg);

    const byAuthorsName = document.createElement('span');
    byAuthorsName.textContent = `By ${obj.authorName}`;
    newAuthor.appendChild(byAuthorsName);

    return newCard;
}

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log("articles axios sucessful", res);
        let topics = Object.keys(res.data.articles);
        console.log(topics);

        console.log(`Log from 'topics' variable:`, topics)

        topics.forEach(topic => {
            res.data.articles[topic].forEach(article => {
                cardsContainer.appendChild(card(article))
            })
        })
    })
    .catch(err => {
        console.log("articles axios get request failed", err);
    })