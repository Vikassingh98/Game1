let shoppingList = [];


export const addToShoppingList = (item) =>{

    const itemId =`${parseInt(
        Math.random() * 10000000
    )} - ${new Date() .getDate()}`;

    shoppingList.push({
        id: itemId,
        item,
        priority: 'normal',
    });
    
};

export  const getShoppingList = () => shoppingList;