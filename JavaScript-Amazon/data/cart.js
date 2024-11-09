export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [{
        productId : '54e0eccd-8f36-462b-b68a-8182611d9add',
        quantity : 2,
        deliveryOptionId : '1'
    },
    {
        productId : 'bc2847e9-5323-403f-b7cf-57fde044a955',
        quantity : 3,
        deliveryOptionId : '2'
    }];
}


function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

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
          quantity: 1,
          deliveryOptionId : '1'
      });        
      }
      else{
      cart.push({
          productId,
          quantity: quantitySelectorValue,
          deliveryOptionId : '1'
      });
      }
  }

  saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId)
            newCart.push(cartItem);
    });

    cart = newCart;

    saveToStorage();
}

export function calculateCartQuantity(){
    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    return cartQuantity;
}

export function updateQuantity(productId, newQuantity){
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    matchingItem.quantity = newQuantity;

    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;

    cart.forEach((item) => {
        if(productId === item.productId){
        matchingItem = item;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}