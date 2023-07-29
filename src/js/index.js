//import Item from ". /Item";

import { addToShoppingList } from "./model";
import { renderShoppingList } from "./view";




const itemInput = document.querySelector("input[name ='itemInput']");
const shoppingListDiv = document.querySelector('shopping-list');
const completedDiv = document.querySelector('.completed');
const clearCompletedBtn = document.querySelector('#clear-completed');


//shoppingListDiv.innerHTML += Item('Notepads', 'high', 1);

itemInput.addEventListener('keyup', function (evt){
    if(evt.key === 'Enter'){
        addToShoppingList(evt.target.value);
         
        addToShoppingList();
        this.value = '';
    }
})
