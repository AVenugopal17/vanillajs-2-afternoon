console.log("Hello");
// declaring a variable called characters 
const characters = [];
const list = document.getElementById('list');
// Delcaring the list using the getElementById function
const search = document.querySelector('input');
// Declare a search using the querySelector and setting the parameter to input.
// using the fetch attribute to store the data within the empty array. 
fetch('https://www.swapi.co/api/people')
    .then(response => response.json())
    .then(response => characters.push(...response.results))
// Create a new function and called the filterText and then delcare the variable within the function. 
function filterText() {
    const filtered = characters
        .filter(val => val.name.toLowerCase().includes(this.value.toLowerCase()))
        .map(val => `<li>${val.name}</li>`)
    if (filtered.length) {
        render(filtered)
    }
}
function render(array) {
    const html = array.join('');
// Combining the html to join within the array in order to pass the array
    list.innerHTML = html;
}
// Adding Event Listener in order to execute the method. It should also utilize the filterText method. 
search.addEventListener('keyup', filterText);