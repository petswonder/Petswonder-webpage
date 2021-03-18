import React, { useState } from 'react';
import { addToCart } from '../cart/cartApi';
import { isAuthenticated } from '../auth/index';
import { Link, Redirect } from 'react-router-dom';
import { Alert } from 'reactstrap';

const Product = ({ product }) => {
  // const {jwt, user:{userNumber}} = isAuthenticated();
  console.log(product);
  const id = product.productID;

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

  console.log(product);

  const leftImage = () => {
    return (
      <div className='col-12 col-md-6' id='over'>
        <img
          src={`https://s3.ap-south-1.amazonaws.com/petswonder.productimages/${product.productId}.PNG`}
          alt={product.title}
        />
      </div>
    );
  };

  const rightDescription = () => {
    return (
      <div className='col-12 col-md-6'>
        <br className='d-xl-none' />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>
          <span style={{ color: '#dc3545' }}>
            ₹ {product.price - (product.price * product.discount) / 100}{' '}
          </span>{' '}
          <span className='cross'>₹ {product.price}</span>
          <span className='save'>({parseInt(product.discount)}% OFF)</span>
        </h3>
        <p>
          <i class='fas fa-exclamation-circle' style={{ color: '#e88345' }}></i>{' '}
          By purchasing this product, you will earn {product.plusPoints}{' '}
          Pluspoints
        </p>
        <br />
        <div className='row'>
          <div className='col-12 col-md-4 iconspro'>
            <i class='fas fa-shopping-cart'></i> In Stock
          </div>
          <div className='col-12 col-md-4 iconspro'>
            <i class='fas fa-money-bill'></i> COD Available
          </div>
          <div className='col-12 col-md-4 iconspro'>
            <i class='far fa-times-circle'></i> No Returns
          </div>
        </div>
        <br />

        <button onClick={handleClick} className='btn btn-lg btn-warning mt-5'>
          <span class='fas fa-sm fa-shopping-cart'></span> Add To Cart
        </button>
      </div>
    );
  };

  const relatedProducts = () => {
    return <div>yo</div>;
  };
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);

  return (
    <div className='container particularProduct'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <h2>Product</h2>
        </div>
        <div className='col-12 col-md-6 left'>
          <p>
            <Link to={`/category/${product.category}`}>{product.category}</Link>
            / <Link to={`/category/${product.species}`}>{product.species}</Link>
            / {product.title}
          </p>
        </div>
      </div>

      <hr />
      <Alert color='success' isOpen={visible} toggle={toggle}>
        Product has been added to cart
      </Alert>
      <div className='row'>
        {leftImage()}
        {rightDescription()}
      </div>

      {redirect && redirectToSignin()}
    </div>
  );
};

export default Product;
