import Item from "./item";
import {getShoppingList} from "./model";

const shoppingListDiv = document.querySelector('.shopping-List');


export const renderShoppingList = () => {

    const domNodes = getShoppingList().map(({item, priority, id}) =>{

        return Item(item, priority, id);
    });
    shoppingListDiv.innerHTML = document.join('');

};