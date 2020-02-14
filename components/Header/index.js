// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// create a function that will create a header component that matches HTML
function Header() {

    // define new elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    // setup the structure of the elements
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    // add classes to elements
    header.classList.add('header');  
    date.classList.add('date');
    temp.classList.add('temp');

    // add text content
    date.textContent = 'March 28, 2019';   
    title.textContent = 'Lambda Times';   
    temp.textContent = '98°';    

    return header;
};

// select the parent container and appendChild
const header = document.querySelector('.header-container');
header.appendChild(Header());