// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// API GET request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    // success  
    .then(response => {
        console.log(response.data.topics);
        // select data topics under response.data node
        const trendingTopics = response.data.topics;
        // call a function (defined below) to add the elements to the page
        topics(trendingTopics);
    })
    // error
    .catch(error => {
        console.log(error);
    });

// Create a function that is invoked when the API request is made. This function is used to layout the topic elements on the page.
function topics(items) {
    // select the topics div container
    const topicsDiv = document.querySelector('.topics');
    // iterate over the topics
    items.forEach(element => {
        // creates inline html span code for each topic
        const topic = document.createElement('span');
        // add class to 
        topic.classList.add('tab');
        // add text content
        topic.textContent = element;
        // append the topic elements in their spans to parent container
        topicsDiv.appendChild(topic);
    });
};

// event listener that consoles anything that is clicked
document.addEventListener('click', event => {
    console.log('button click', event.target);
});