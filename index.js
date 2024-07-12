document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('item-input');
    const addButton = document.getElementById('add-button');
    const clearButton = document.getElementById('clear-button');
    const shoppingList = document.getElementById('shopping-list');

    let items = JSON.parse(localStorage.getItem('shoppingList')) || [];

    // Function to add an item to the list
    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            items.push({ text: itemText, purchased: false });
            itemInput.value = '';
            updateLocalStorage();
            renderList();
        }
    }

    // Function to render the list
    function renderList() {
        shoppingList.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.text;
            if (item.purchased) {
                li.classList.add('purchased');
            }
            li.addEventListener('click', () => togglePurchased(index));
            li.addEventListener('dblclick', () => editItem(index));
            shoppingList.appendChild(li);
        });
    }

    // Function to mark an item as purchased
    function togglePurchased(index) {
        items[index].purchased = !items[index].purchased;
        updateLocalStorage();
        renderList();
    }
    // Function to edit an item
    function editItem(index) {
        const newItemText = prompt('Edit item:', items[index].text);
        if (newItemText !== null && newItemText.trim() !== '') {
            items[index].text = newItemText.trim();
            updateLocalStorage();
            renderList();
        }
    }

    // Function to clear the list
    function clearList() {
        items = [];
        updateLocalStorage();
        renderList();
    }

    // Function to update local storage
    function updateLocalStorage() {
        localStorage.setItem('shoppingList', JSON.stringify(items));
    }

    // Event listeners
    addButton.addEventListener('click', addItem);
    clearButton.addEventListener('click', clearList);
    itemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    });

    // Initial render
    renderList();
});
