import React from 'react';
// import React,  from 'react'

// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/core/Home';
import Menu from './components/core/Menu';
import Signin from './components/user/Signin';
import Signup from './components/user/Signup';
import Footer from './components/core/Footer';
import Shopping from './components/shopping/Shopping';
import ParticularProduct from './components/core/ParticularProduct';
import Category from './components/category/Category';
import Cart from './components/cart/Cart';
import Pet from './components/category/Pet';
import PopularProductPage from './components/shopping/PopularProductPage';
import PayByRazorPay from './components/core/PayByRazorPay';
import Profile from './components/core/Profile';
import PetProfile from './components/core/PetProfile';
import CreateProfile from './components/core/CreateProfile';
import EditProfile from './components/core/EditProfile';
import PrivateRoute from './components/auth/PrivateRoute';
import Address from './components/core/Address';
import Payment from './components/core/Payment';
import PetServices from './components/petServices/PetServices';
import PetGuide from './components/petServices/PetGuide';
import Brand from './components/category/Brand';
import petMate from './components/petServices/petMate';
import SubFood from './components/category/SubFood';
import AboutUs from './components/core/AboutUs';
import OrderHistory from './components/core/OrderHistory';
import PetSnap from './components/petServices/PetSnap';
import OnlineDoc from './components/petServices/OnlineDoc';
import Successful from './components/core/Successful';
import NotFound from './components/404';
import Tc from './components/core/Tc';
import Maintenance from './components/core/Maintenance';
import SearchPage from './components/core/SearchPage';
import CreatePet from './components/core/CreatePetProfile';
import EditPetProfile from './components/core/EditPetProfile'

const App = () => {

    

  return (
    // <Maintenance />
    <Router>
      <Menu />
      <div className='mt-62'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/shopping' component={Shopping} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <PrivateRoute exact path='/petprofile' component={PetProfile} />
          <Route
            exact
            path='/product/:productId'
            component={ParticularProduct}
          />
          <Route exact path='/pet/:pet/category/:name' component={Category} />
          <Route
            exact
            path='/pet/:pet/category/:name/:sub'
            component={SubFood}
          />
          <Route exact path='/pet/:pet' component={Pet} />
          <Route exact path='/brand/:name' component={Brand} />
          <PrivateRoute exact path='/cart' component={Cart} />
          <PrivateRoute
            exact
            path='/popularProducts'
            component={PopularProductPage}
          />
          <Route exact path='/search' component={SearchPage} />
          <PrivateRoute exact path='/payByRazorPay' component={PayByRazorPay} />
          <PrivateRoute exact path='/createProfile' component={CreateProfile} />
          <PrivateRoute exact path='/editProfile' component={EditProfile} />
          <PrivateRoute exact path='/createPet' component={CreatePet} />
          <PrivateRoute exact path='/editPetProfile' component={EditPetProfile} />
          <PrivateRoute exact path='/setaddress' component={Address} />
          <PrivateRoute exact path='/payment' component={Payment} />
          <PrivateRoute exact path='/petCare' component={PetServices} />
          <PrivateRoute exact path='/onlineDoc' component={OnlineDoc} />
          <PrivateRoute exact path='/petGuide' component={PetGuide} />
          <PrivateRoute exact path='/petMate' component={petMate} />
          <PrivateRoute exact path='/petSnap' component={PetSnap} />
          <PrivateRoute exact path='/success' component={Successful} />
          <PrivateRoute
            exact
            path='/historyPurchase'
            component={OrderHistory}
          />
          <Route exact path='/about' component={AboutUs} />
          <Route exact path='/termsandconditions' component={Tc} />
          <Route exact path='/maintenance' component={Maintenance} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  
  );
};

export default App;

