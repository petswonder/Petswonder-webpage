import axios from 'axios';

//add to cart
export const addToCart = ({ userNumber, id }) => {
  return fetch(
    `https://petswonder.co.in/petswonder/api/cart/addToCart?userNumber=${userNumber}&productId=${id}`,
    {
      method: 'POST',
    }
  )
    .then((response) => {
      console.log(userNumber, id);
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

export const saveOrder = async (data) => {
  const response = await axios.post(
    'https://petswonder.co.in/petswonder/api/saveOrder/orderDetails',
    JSON.stringify(data),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response;
};
