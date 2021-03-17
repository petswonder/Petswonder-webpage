//add to cart
export const addToCart = ({ userNumber, id }) => {
  return fetch(
    `https://petswonder.co.in/petswonder/api/cart/addToCart?userNumber=${userNumber}&productId=${id}`,
    {
      method: 'POST',
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete cart items
export const deleteCart = (userNumber) => {
  return fetch(
    `https://petswonder.co.in/petswonder/api/cart/clearCart?userNumber=${userNumber}`,
    {
      method: 'POST',
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//get products of cart
export const getCart = (userNumber) => {
  return fetch(
    `https://petswonder.co.in/petswonder/api/cart/getCartProducts?userNumber=${userNumber}`,
    {
      method: 'POST',
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//ADJUST QUANTITY
export const updateItem = ({ userNumber, productId, count }) => {
  return fetch(
    `https://petswonder.co.in/petswonder/api/cart/addQuantity?userNumber=${userNumber}&productId=${productId}&quantityIncrement=${count}`,
    {
      method: 'POST',
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//get total
export const getTotal = (userNumber) => {
  return fetch(
    `https://petswonder.co.in/petswonder/api/cart/getCartTotal?userNumber=${userNumber}`,
    {
      method: 'POST',
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const saveOrder = (order) => {
  return fetch(`https://petswonder.co.in/petswonder/api/saveOrder/razorpay`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
