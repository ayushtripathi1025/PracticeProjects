export const cart = [];

export function addToCart(productId, quantitySelector, quantitySelectorValue){
  let matchingItem;

  cart.forEach((item) => {
      if(productId === item.productId){
      matchingItem = item;
      }
  });

  if(matchingItem){
      if(quantitySelector.value==1)
      matchingItem.quantity += 1;
      else
      matchingItem.quantity += quantitySelectorValue;
  }
  else{
      if(quantitySelector.value==1){
      cart.push({
          productId,
          quantity: 1
      });        
      }
      else{
      cart.push({
          productId,
          quantity: quantitySelectorValue
      });
      }
  }
}