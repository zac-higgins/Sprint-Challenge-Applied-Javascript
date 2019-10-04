// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector('.topics');

function newTab(obj){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = obj;
    return tab;
}

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        console.log("topics axios sucessful", res);
        let topics = res.data.topics;
        topics.forEach(topic => {
            tabs.appendChild(newTab(topic))
        })
    })
    .catch(err => {
        console.log("topics axios get request failed", err);
    })