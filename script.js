// Task 1: Array Manipulation Basics
// Create an empty array called shoppingList.=>ok
const shoppingList = [];
const input = document.getElementById("item-input");
const addButton = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const filterBtn = document.getElementById("filter-btn");
const filterItem = document.getElementById("filter-name");
const itemsUl = document.getElementById("shopping-list");
let count = 0;

console.log(input.value);

// Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
function addItem(item) {
     // Modify the addItem function to only add the item if it is not already in the shoppingList array.
    // add the item to the array
     shoppingList.push(item);
    console.log(`${item} has been added to the shopping list.` + ` Current list: ${shoppingList}`);
}
function displayItem(item) {
    let li = document.createElement('li');
        // update the element with the text (value between <li> and </li>)
    li.textContent = item;
        // append the new element(li) to the ul
    itemsUl.appendChild(li);
        // clears the input text
}
function addAndDisplayItems() {
    if (input.value === "") {
        alert("Please enter an item name.");
        return;
    }
    console.log("I am in addAndDisplayItems", input.value);

    if (!shoppingList.includes(input.value)) {
         addItem(input.value);
         displayItem(input.value);
    } else {
        console.log(`${input.value} is already in the shopping list.`);
    }    
    console.log(shoppingList);
    input.value = "";
}

// Write a function called displayList that logs all items in the shoppingList array to the console.
function displayList(){
    shoppingList.forEach((item)=> console.log(item));     
};
// Write a function called removeLastItem that removes the last item from the shoppingList array.
function removeLastItem(){  
    console.log("Current shopping list in removeLastItem:"+count , shoppingList);
    // remove the last item in the array
    const removedItem = shoppingList.pop();
    console.log(`${removedItem} has been removed from the shopping list.`);
    count++;
}
// Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.
function removeLastItemAndUpdate() {
    if (shoppingList.length === 0) {// check if the array is empty
        console.log("The shopping list is already empty.");
        return;
    }
// remove the last item in the array
    removeLastItem();
    // remove the last item from the ul
    itemsUl.lastElementChild.remove();
    console.log("Updated shopping list in removeLastItemAndUpdate:", shoppingList);
}
// Task 2: Filter and Search an Array: Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).
function filterItems(term) {
   const foundItems = shoppingList.filter((item) => item.includes(term));
    console.log(term);    
    console.log(shoppingList);
    console.log(foundItems);
    itemsUl.innerHTML = ""; // Clear the current list
    foundItems.forEach((item) => console.log(item));
    // Display the filtered items
    displayItem(foundItems);
    return foundItems;
}

// Task 3: Render the List in the Browser
// Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.
// Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
addButton.addEventListener('click', addAndDisplayItems);
removeBtn.addEventListener('click', removeLastItemAndUpdate);
filterBtn.addEventListener('click', () => filterItems(filterItem.value));
