document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');
    const clearListButton = document.getElementById('clearListButton');
    const shoppingList = document.getElementById('shoppingList');

    let itemsArray = [];

    const addItem = () => {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            itemsArray.push(itemText);
            renderList();
            itemInput.value = '';
        }
    };

    const renderList = () => {
        shoppingList.innerHTML = '';
        itemsArray.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', () => markAsPurchased(index));
            shoppingList.appendChild(li);
        });
    };

    const markAsPurchased = (index) => {
        const listItem = shoppingList.children[index];
        listItem.classList.toggle('purchased');
    };

    const clearList = () => {
        itemsArray = [];
        renderList();
    };

    addItemButton.addEventListener('click', addItem);
    clearListButton.addEventListener('click', clearList);
});
