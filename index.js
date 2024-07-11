// Initialize an empty array to store shopping list items
let shoppingList = [];

// Get references to DOM elements
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const listContainer = document.getElementById('listContainer');

// Function to render the shopping list
function renderList() {
    listContainer.innerHTML = ''; // Clear the current list
    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        listItem.classList.toggle('purchased', item.purchased);
        listItem.addEventListener('click', () => togglePurchased(index));
        listContainer.appendChild(listItem);
    });
}

// Function to add a new item to the shopping list
function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName !== '') {
        shoppingList.push({ name: itemName, purchased: false });
        itemInput.value = '';
        renderList();
    }
}

// Function to toggle the purchased status of an item
function togglePurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased;
    renderList();
}

// Function to clear the shopping list
function clearList() {
    shoppingList = [];
    renderList();
}

// Event listeners
addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearList);

// Optional: Persist list using localStorage
function saveList() {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function loadList() {
    const savedList = localStorage.getItem('shoppingList');
    if (savedList) {
        shoppingList = JSON.parse(savedList);
        renderList();
    }
}

// Save list before the page unloads
window.addEventListener('beforeunload', saveList);

// Load list on page load
document.addEventListener('DOMContentLoaded', loadList);
