import React, { useState } from 'react';
import { addToCart } from '../cart/cartApi';
import { isAuthenticated } from '../auth/index';
import { Redirect } from 'react-router-dom';
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
    <div className='container particularProduct my-3'>
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
          <h2 className="m-0">{product.title}</h2>
          <p className="m-0 font-size-14 py-1">{product.description}</p>
          <h3 className="m-0">
            <span className="mr-2 font-weight-bold">
              ??? {product.price - (product.price * product.discount) / 100}
            </span>
            <span className='cross text-bg mr-2' style={{ textDecoration: 'line-through' }}>??? {product.price}</span>
            <span className='font-size-18'>({parseInt(product.discount)}% OFF)</span>
          </h3>
          <p className="m-0 font-size-14 py-1 d-flex align-items-center">
            <i className='fas fa-exclamation-circle text-dark mr-2'></i>
            By purchasing this product, you will earn {product.plusPoints} pluspoints
          </p>
          <div className='d-flex'>
            <div className='mr-2'>
              <i className='fas fa-shopping-cart'></i>
              {disable && ' Not'} In Stock
            </div>
            <div className='mr-2'>
              <i className='fas fa-money-bill'></i> COD Available
            </div>
            <div className=''>
              <i className='far fa-times-circle'></i> No Returns
            </div>
          </div>
          <div className="mt-3">
            <button
              onClick={handleClick}
              className='btn btn-lg btn-primary'
              disabled={disable}
              style={{ cursor: disable ? 'not-allowed' : 'pointer' }}
            >
              <span className='fas fa-sm fa-shopping-cart'></span> Add To Cart
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
