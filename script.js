// Task 1: Array Manipulation Basics
// Create an empty array called shoppingList.=>ok
const shoppingList = [];
const input = document.getElementById("item-input");
const addButton = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const itemsUl = document.getElementById("shopping-list");

// Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
function addItem(item) {
     // Modify the addItem function to only add the item if it is not already in the shoppingList array.
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
        console.log(`${item} has been added to the shopping list.` + ` Current list: ${shoppingList}`);
    } else {
        console.log(`${item} is already in the shopping list.`);
    }
}
// Write a function called removeLastItem that removes the last item from the shoppingList array.
function removeLastItem(){  
    const removedItem = shoppingList.pop();
    console.log(`${removedItem} has been removed from the shopping list.`);
}

// Write a function called displayList that logs all items in the shoppingList array to the console.
function displayList(){
    shoppingList.forEach((item)=> console.log(item));     
};

// Task 2: Filter and Search an Array: Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).
function filterItems(term) {
   const foundItems = shoppingList.filter((item) => item.includes(term));
    console.log(term);    
    console.log(shoppingList);
    console.log(foundItems);
}
addItem("Tomato"); addItem("onion-powder"); addItem("appleonion"); addItem("milk");
addItem("Tomato"); 
displayList();
removeLastItem();
displayList();
filterItems("onion");
// Task 3: Render the List in the Browser
// Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.

// Select or query elements
console.log(input);
console.log(addButton);
console.log(itemsUl);
// Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
function addAndDisplayItems() {
    // add the item to the array
    shoppingList.push(input.value);
       // create a new element
    let li = document.createElement('li');
    // update the element with the text
    li.textContent = input.value;
    // append the new element to the ul
    itemsUl.appendChild(li);
    // clears the input text
    input.value = "";
    console.log(shoppingList);
}
// Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.

function removeLastItemAndUpdate() {
    // remove the last item in the array
    const removedItem = shoppingList.pop();
    // remove the last item from the ul
    itemsUl.lastElementChild.remove();
    console.log(shoppingList);
    
}
addButton.addEventListener('click', addAndDisplayItems);
removeBtn.addEventListener('click', removeLastItemAndUpdate);

