import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { addToCart, updateItem } from '../cart/cartApi';
import { isAuthenticated } from '../auth/index';
import notFound from '../../images/notfound.jpg';
import { Alert } from 'reactstrap';
import noImage from '../../images/no image.png';
import soldout from '../../images/soldout.png';

const Card = ({
  data,
  showViewButton = true,
  showAddToButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
}) => {
  // console.log(data);
  const [count, setCount] = useState(data.quantity);
  const [disable, setDisable] = useState(false);

  const productId = data.productId;
  const id = data.productId;

  const [redirect, setRedirect] = useState(false);
  const redirectToSignin = () => {
    return <Redirect to='/signin' />;
  };

  const handleClick = () => {
    if (isAuthenticated() == false) {
      setRedirect(true);
    } else {
      const {
        jwt,
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

  const handleChange = (productId) => (e) => {};

  const decrease = () => {
    count >= 0 && setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count >= 0) {
      const {
        jwt,
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

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div style={{ width: '50%', margin: 'auto' }}>
          <div className='input-group mt-3 mb-3 '>
            <div className='input-group-prepend'>
              <button
                onClick={decrease}
                className='input-group-text btn btn-warning rounded-circle'
              >
                -
              </button>
            </div>
            <input
              type='number'
              className='form-control text-center'
              style={{ borderTop: '0', borderLeft: '0', borderRight: '0' }}
              value={count}
              onChange={handleChange(data.productId)}
            />
            <div className='input-group-prepend'>
              <button
                onClick={increase}
                className='input-group-text btn btn-warning rounded-circle '
              >
                +
              </button>
            </div>
          </div>
        </div>
      )
    );
  };

  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);

  return (
    <div className='single_courses'>
      <div className='thumb'>
        <Link
          to={{
            pathname: `/product/${data.productId}`,
            state: data,
          }}
          style={{ textDecorationLine: 'none' }}
        >
          {disable && (
            <img
              src={soldout}
              alt='soldout'
              style={{
                position: 'absolute',
                zIndex: '10',
                opacity: '50%',
                top: '10%',
                left: '25%',
                width: '50%',
              }}
            />
          )}

          <a className='akruti-a'>
            {data.productImages ? (
              <img
                className='akruti-img'
                src={`https://s3.ap-south-1.amazonaws.com/petswonder.productimages/${data.productId}.PNG`}
                alt='image'
              />
            ) : (
              <img className='akruti-img' src={noImage} alt='No image found' />
            )}
          </a>
        </Link>
      </div>
      <div className='courses_info'>
        <h3 className='akruti-h3'>
          {data.title} <br></br>
        </h3>
        {/* <p className="d-sm-none d-md-block d-none d-sm-block">
                {data.description.slice(0,95)}
                {data.description.length>95 && <Fragment>.....</Fragment>}
            </p> */}
        <div className='star_prise justify-content-between'>
          <div className='star col-sm-8 col-12 lol'>
            <div
              className='prise col-sm-4 col-12 lol'
              style={{ display: 'inline-block' }}
            >
              <span className='offer'>₹{data.price}</span>
              <span className='active_prise'>
                ₹{data.price - (data.price * data.discount) / 100}
              </span>
            </div>
          </div>
          {showAddToButton && (
            <div className='buttons'>
              <button
                className='btn btn-outline-warning btn-sm mb-2 '
                onClick={handleClick}
                disabled={disable}
                style={{
                  cursor: disable ? 'not-allowed' : 'pointer',
                  position: 'absolute',
                  bottom: '15%',
                  left: '20%',
                }}
              >
                Add to Cart
              </button>
              {/* <a href="#"><span ><i class="far fa-lg fa-heart" style={{paddingRight:"20px"}}></i></span></a>{' '} */}
              <Link
                to={{
                  pathname: `/product/${data.productId}`,
                  state: data,
                }}
                className='btn btn-danger btn-sm mb-2'
                style={{
                  textDecorationLine: 'none',
                  position: 'absolute',
                  bottom: '15%',
                  right: '25%',
                }}
              >
                Buy Now
              </Link>
            </div>
          )}
        </div>

        {showCartUpdateOptions(cartUpdate)}
        {redirect && redirectToSignin()}
      </div>
      <Alert color='success' isOpen={visible} toggle={toggle}>
        Product has been added to cart
      </Alert>
    </div>
  );
};

export default Card;
