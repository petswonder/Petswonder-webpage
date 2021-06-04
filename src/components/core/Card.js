import React, {  useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { addToCart, updateItem } from '../cart/cartApi';
import { isAuthenticated } from '../auth/index';
import noImage from '../../images/no image.png';


const Card = ({
  data,
  showAddToButton = true,
  cartUpdate = false,
  cartPage = false
}) => {
  // console.log(data);
  const history = useHistory()
  const [count, setCount] = useState(data.quantity);
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
            history.push('/cart')
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };



  // console.log(data);

  // const handleChange = (productId) => (e) => {};

  const decreaseQuantity = () => {
    count >= 0 && setCount(count - 1);
  };

  const increaseQuantity = () => {
    setCount(count + 1);
  };

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


  const [ setVisible] = useState(false);

  // const toggle = () => setVisible(!visible);

  return (
    <div className="card h-100 text-center">
      <Link
        to={{
          pathname: `/product/${data.productId}`,
          state: data,
        }}>
      <div className="card-body h-200">
        {data.productImages ? (
          <img
          src={`https://s3.ap-south-1.amazonaws.com/petswonder.productimages/${data.productId}.PNG`}
           style={{'objectFit': 'contain'}} className="card-img-top w-100 h-100" alt={`${data.productId}`}
          />
        ) : (
          <img className='' src={noImage} alt='nodata' />
        )}
      </div>
      </Link>
      <div className="card-footer p-0">
      <Link
        to={{
          pathname: `/product/${data.productId}`,
          state: data,
        }}><h5 className="card-title m-0 font-size-14 py-2">{data.title}</h5></Link>
        <div>
          <span className='mr-1 text-dark text-decoration-line-through' style={{ textDecoration: 'line-through' }}>₹{data.price}</span>
          <span className='ml-1 font-weight-bold text-secondary'>
            ₹{data.price - (data.price * data.discount) / 100}
          </span>
        </div>
        {/* <p className="card-text m-0 font-size-14">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        {showAddToButton && (
          <>
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
            
            
            </>
          )}
        {cartPage ? (
            <div class="btn-group mb-2" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-primary px-2 py-0" onClick={decreaseQuantity}>-</button>
              <span class="border-primary align-self-center p-1 border-top border-bottom px-2">{count}</span>
              <button type="button" class="btn btn-outline-primary px-2 py-0" onClick={increaseQuantity}>+</button>

            </div>
            ) : (
            <></>
            )}
      </div>
    </div>
  );
};

export default Card;
