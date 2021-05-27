import React, { useState } from 'react';
import { addToCart } from '../cart/cartApi';
import { isAuthenticated } from '../auth/index';
import { Link, Redirect } from 'react-router-dom';
import { Alert } from 'reactstrap';
import Heading from '../core/Heading';


const Product = ({ product }) => {
  // const {jwt, user:{userNumber}} = isAuthenticated();

  // console.log(product, 'state');
  const [disable, setDisable] = useState(false);
  if (product.inventory === 0) {
    setDisable(true);
  }

  const id = product.productId;

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



  const relatedProducts = () => {
    return <div>yo</div>;
  };
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);

  return (
    <>
    <Heading text='Product' />
    <div className='container particularProduct mb-4'>
      <Alert color='success' isOpen={visible} toggle={toggle}>
        Product has been added to cart
      </Alert>
      <div className='row h-350'>
        <div className='col-12 col-md-6 h-100 text-center'>
          <img
            src={`https://s3.ap-south-1.amazonaws.com/petswonder.productimages/${product.productId}.PNG`}
            alt={product.title} className="h-100"
          />
        </div>
        <div className='col-12 col-md-6 justify-content-center d-flex flex-column'>
          <h2 class="m-0">{product.title}</h2>
          <p className="m-0 font-size-14 py-1">{product.description}</p>
          <h3 class="m-0">
            <span class="mr-2 font-weight-bold">
              ₹ {product.price - (product.price * product.discount) / 100}
            </span>
            <span className='cross text-bg mr-2' style={{ textDecoration: 'line-through' }}>₹ {product.price}</span>
            <span className='font-size-18'>({parseInt(product.discount)}% OFF)</span>
          </h3>
          <p class="m-0 font-size-14 py-1 d-flex align-items-center">
            <i class='fas fa-exclamation-circle text-dark mr-2'></i>
            By purchasing this product, you will earn {product.plusPoints} pluspoints
          </p>
          <div className='d-flex'>
            <div className='mr-2'>
              <i class='fas fa-shopping-cart'></i>
              {disable && ' Not'} In Stock
            </div>
            <div className='mr-2'>
              <i class='fas fa-money-bill'></i> COD Available
            </div>
            <div className=''>
              <i class='far fa-times-circle'></i> No Returns
            </div>
          </div>
          <div class="mt-3">
            <button
              onClick={handleClick}
              className='btn btn-lg btn-primary'
              disabled={disable}
              style={{ cursor: disable ? 'not-allowed' : 'pointer' }}
            >
              <span class='fas fa-sm fa-shopping-cart'></span> Add To Cart
            </button>
          </div>
          
        </div>
      </div>

      {redirect && redirectToSignin()}
    </div>
    </>
  );
};

export default Product;
