import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToCart, updateItem } from '../cart/cartApi';
import { isAuthenticated } from '../auth/index';
import noImage from '../../images/no image.png';

const Card = ({
  data,
  showAddToButton = true,
  cartUpdate = false,
}) => {
  // console.log(data);
  const [count] = useState(data.quantity);
  const [disable, setDisable] = useState(false);

  const productId = data.productId;
  const id = data.productId;

  const [setRedirect] = useState(false);
  

  const handleClick = () => {
    if (isAuthenticated() === false) {
      setRedirect(true);
    } else {
      const {
        user: { userNumber },
      } = isAuthenticated();
      addToCart({ userNumber, id })
        .then((data) => {
          if (data.status === 'Product added to cart') {
            setVisible(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // console.log(data);

  // const handleChange = (productId) => (e) => {};

  // const decrease = () => {
  //   count >= 0 && setCount(count - 1);
  // };

  // const increase = () => {
  //   setCount(count + 1);
  // };

  useEffect(() => {
    if (count >= 0) {
      const {
        user: { userNumber },
      } = isAuthenticated();
      isAuthenticated() &&
        cartUpdate &&
        updateItem({ userNumber, productId, count })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
    }
    if (data.inventory === 0) {
      setDisable(true);
    }
  }, [count]);

  // const showCartUpdateOptions = (cartUpdate) => {
  //   return (
  //     cartUpdate && (
  //       <div style={{ width: '50%', margin: 'auto' }}>
  //         <div className='input-group mt-3 mb-3 '>
  //           <div className='input-group-prepend'>
  //             <button
  //               onClick={decrease}
  //               className='input-group-text btn btn-warning rounded-circle'
  //             >
  //               -
  //             </button>
  //           </div>
  //           <input
  //             type='number'
  //             className='form-control text-center'
  //             style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}
  //             value={count}
  //             onChange={handleChange(data.productId)}
  //           />
  //           <div className='input-group-prepend'>
  //             <button
  //               onClick={increase}
  //               className='input-group-text btn btn-warning rounded-circle '
  //             >
  //               +
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     )
  //   );
  // };

  const [ setVisible] = useState(false);

  // const toggle = () => setVisible(!visible);

  return (
    <div class="card h-100 text-center">
      <div class="h-50 card-body">
        {data.productImages ? (
          <img
          src={`https://s3.ap-south-1.amazonaws.com/petswonder.productimages/${data.productId}.PNG`}
          alt='image' class="card-img-top h-100" alt={`${data.productId}_img`}
          />
        ) : (
          <img className='' src={noImage} alt='No image found' />
        )}
      </div>
      <div class="card-footer p-0">
        <h5 class="card-title m-0 font-size-16 py-2">{data.title}</h5>
        <div>
          <span className='mr-1 text-dark text-decoration-line-through' style={{ textDecoration: 'line-through' }}>₹{data.price}</span>
          <span className='ml-1 font-weight-bold text-secondary'>
            ₹{data.price - (data.price * data.discount) / 100}
          </span>
        </div>
        {/* <p class="card-text m-0 font-size-14">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        {showAddToButton && (
            <div className=''>
              <button
                className='btn btn-primary btn-sm mb-2 mr-2'
                onClick={handleClick}
                disabled={disable}
              >
                Add to Cart
              </button>
              <Link
                to={{
                  pathname: `/product/${data.productId}`,
                  state: data,
                }}
                className='btn btn-danger btn-sm mb-2'
              >
                Buy Now
              </Link>
            </div>
          )}
      </div>
    </div>
    
  );
};

export default Card;
