export const sentOTP = (phoneNumber) => {
  return fetch(
    `https://petswonder.co.in/petswonder/api/Otp/generateOtpForRegistration?phoneNumber=91 ${phoneNumber}`,
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

export const validateOTP = ({ phoneNumber, otp }) => {
  return fetch(
    `https://petswonder.co.in/petswonder/api/Otp/validateOTP?phoneNumber=91 ${phoneNumber}&otp=${otp}`,
    {
      method: 'POST',
    }
  )
    .then((response) => {
      return response.text();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const registerUser = ({ phoneNumber, password, name, email }) => {
  return fetch(
    `https://petswonder.co.in/petswonder/api/register/save?mobileNumber=${phoneNumber}&password=${password}&name=${name}&email=${email}`,
    {
      method: 'POST',
    }
  )
    .then((response) => {
      return response.text();
    })
    .catch((err) => {
      console.log(err);
    });
};

//save token in storage
export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};


//signin user
export const signin = (user) => {
  // console.log(user);
  return fetch(
    `https://petswonder.co.in/petswonder/api/register/loginCheck?userNumber=${user.userNumber}&password=${user.password}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }
  )
    .then((response) => {
      return response.text();
    })
    .catch((err) => {
      console.log(err);
    });
};

//to check if authenticated
export const isAuthenticated = () => {
  // debugger
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  }
  return false;
}

//signout
export const signout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    // next();
  }
  // return fetch(`https://petswonder.co.in/petswonder/api/signin`, {
  //   method: 'GET',
  // })
  //   .then((response) => {
  //     console.log('signout', response);
  //   })
  //   .catch((err) => console.log(err));
};

//get profile
export const getProfile = (userNumber) => {
  // debugger
  return fetch(
    `https://petswonder.co.in/petswonder/api/petProfileDetails/getPetDetails?mobileNumber=${userNumber}`,
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

//create profile
export const createProfile = (formData) => {
  console.log(JSON.stringify(formData));
  // debugger
  return fetch(
    `https://petswonder.co.in/petswonder/api/petProfileDetails/addPetDetails`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//create profile
export const editProfile = (formData) => {
  // debugger
  return fetch(
    `https://petswonder.co.in/petswonder/api/petProfileDetails/editProfileDetails`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//get order history
export const getOrderHistory = (userNumber) => {
  return fetch(
    `https://petswonder.co.in/petswonder/api/saveOrder/getOrderDetails?mobileNumber=${userNumber}`,
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
