import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { updateItem } from '../cart/cartApi';
import { addToCart, getCartSummary, updateItem } from '../auth/api';
import { isAuthenticated } from '../auth/index';
import noImage from '../../images/no image.png';
import outOfStock from '../../images/outofstock.png';
// import { getCart } from '../cart/cartApi';

const Card = ({
  data,
  showAddToButton = true,
  cartUpdate = false,
  cartPage = false,
}) => {
  // console.log(data)
  const history = useHistory();
  const [count, setCount] = useState(data.product_quantity);
  const [disable, setDisable] = useState(false);

  // const [items, setItems] = useState('');
  // console.log(isAuthenticated())
  // const userNumber = isAuthenticated() ? isAuthenticated().data.user_mobile : null

  const productId = data.product_id;
  const id = data.product_id;

  const [setRedirect] = useState(false);

  const handleClick = () => {
    if (isAuthenticated() === false) {
      history.push('/signin');
    } else {
      // const {user: { userNumber }} = isAuthenticated();
      // console.log({userNumber, id})
      const userNumber = isAuthenticated().data.user_mobile
      addToCart({ userNumber, id })
        .then((data) => {
          if (data === 'success') {
            history.push('/cart');
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  //Updates the quantity api
  const quantityChange = () => {
    if (isAuthenticated() === false) {
      setRedirect(true);
    } else {
      const userNumber = isAuthenticated().data.user_mobile
      getCartSummary({userNumber}).then((data) => {
        console.log(data);
      });
    }
  };

  const decreaseQuantity = () => {
    count > 0 && setCount(count - 1);
    quantityChange();
  };

  const increaseQuantity = () => {
    setCount(count + 1);
    quantityChange();
  };

  useEffect(() => {
    if (count >= 0) {
      const userNumber = isAuthenticated().data.user_mobile
      console.log(userNumber)
      isAuthenticated() &&
        cartUpdate &&
        updateItem({ userNumber, productId, count })
          .then((data) => {
            // console.log(data);
          })
          .catch((err) => {
            alert(err);
          });
    }
    if (data.inventory === 0) {
      setDisable(true);
    }
  }, [count, cartUpdate, data.inventory, productId]);

  // const [visible, setVisible] = useState(false);

  // const toggle = () => setVisible(!visible);

  return (
    <div className='card h-100 text-center'>
      <Link
        to={{
          pathname: `/product/${data.product_id}`,
          state: data,
        }}
      >
        <div className='card-body h-200'>
          {disable && (
            <img
              className=''
              src={outOfStock}
              alt='nodata'
              style={{
                width: '50%',
                top: '0%',
                position: 'absolute',
                left: '0%',
              }}
            />
          )}
          {data.product_images ? (
            <img
              src={`https://s3.ap-south-1.amazonaws.com/petswonder.productimages/${data.product_id}.PNG`}
              style={{ objectFit: 'contain' }}
              className='card-img-top w-100 h-100'
              alt={`${data.product_id}`}
            />
          ) : (
            <img className='' src={noImage} alt='nodata' />
          )}
        </div>
      </Link>
      <div className='card-footer p-0'>
        <Link
          to={{
            pathname: `/product/${data.product_id}`,
            state: data,
          }}
        >
          <h5 className='card-title m-0 font-size-14 py-2'>{data.product_title}</h5>
        </Link>
        <div>
          <span
            className='mr-1 text-dark text-decoration-line-through'
            style={{ textDecoration: 'line-through' }}
          >
            ₹{data.product_price}
          </span>
          <span className='ml-1 font-weight-bold text-secondary'>
            ₹{data.product_price - (data.product_price * data.product_discount) / 100}
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
                  pathname: `/product/${data.product_id}`,
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
          <div
            className='btn-group mb-2'
            role='group'
            aria-label='Basic outlined example'
          >
            <button
              type='button'
              className='btn btn-outline-primary px-2 py-0'
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className='border-primary align-self-center p-1 border-top border-bottom px-2'>
              {count}
            </span>
            <button
              type='button'
              className='btn btn-outline-primary px-2 py-0'
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Card;
