import axios from 'axios';

export const putOrder = async (body) => {
  const response = await axios.post(
    `https://petswonder.co.in/petswonder/api/saveOrder/orderDetails`,
    { body }
  );
  return response.data;
};
