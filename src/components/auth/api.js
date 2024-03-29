

const apiBaseUrl = 'http://localhost:5000'



// const csrf = () => {
//     // console.log(headers)
//     return fetch(`${apiBaseUrl}/`).then(res => {
//         // headers['CSRF-Token'] = res.json()
//         // console.log(headers)
//         return res.json()
//     })
// }

// headers['CSRF-Token'] = csrf()





// user auth apis

export const sendOTP = (phoneNumber) => {
    return fetch(
      `${apiBaseUrl}/sendOTP?number=${phoneNumber}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const validateOTP = (phoneNumber, otp) => {
    return fetch(
      `${apiBaseUrl}/validateOTP?number=${phoneNumber}&otp=${otp}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const registerUser = (userData) => {
    //   console.log(JSON.stringify(userData))
      return fetch(`${apiBaseUrl}/register`,
      {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userData)
      }).then((response) => {
        return response.json();
      }).catch((err) => {
        console.log(err)
      })
  }

  export const signin = (userData) => {
    //   console.log(JSON.stringify(userData))
      return fetch(`${apiBaseUrl}/login`,
      {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userData)
      }).then((response) => {
        return response.json();
      }).catch((err) => {
        console.log(err)
      })
  }

  export const getProfile = (userNumber) => {
    //   console.log(JSON.stringify(userData))
      return fetch(`${apiBaseUrl}/profile`,
      {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userNumber)
      }).then((response) => {
        return response.json();
      }).catch((err) => {
        console.log(err)
      })
  }

  export const editProfile = (data) => {
      console.log(JSON.stringify(data))
      return fetch(`${apiBaseUrl}/editprofile`,
      {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      }).then((response) => {
        return response.json();
      }).catch((err) => {
        console.log(err)
      })
  }

  export const getPetProfile = (userNumber) => {
    //   console.log(JSON.stringify(userData))
      return fetch(`${apiBaseUrl}/petprofile`,
      {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userNumber)
      }).then((response) => {
        return response.json();
      }).catch((err) => {
        console.log(err)
      })
  }

  export const createPet = (data) => {
    //   console.log(JSON.stringify(userData))
      return fetch(`${apiBaseUrl}/createpetprofile`,
      {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      }).then((response) => {
        return response.json();
      }).catch((err) => {
        console.log(err)
      })
  }

  export const editPet = (data) => {
      console.log(JSON.stringify(data))
      return fetch(`${apiBaseUrl}/editpetprofile`,
      {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      }).then((response) => {
        return response.json();
      }).catch((err) => {
        console.log(err)
      })
  }
// pets api





//   products api

export const getAllProducts = (search) => {
  console.log(search)
    return fetch(`${apiBaseUrl}/products`).then(res => {
        return res.json()
    })
}


// cart api
export const addToCart = (data) => {
    return fetch(`${apiBaseUrl}/cart/addToCart`,
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then((response) => {
      return response.json();
    }).catch((err) => {
      console.log(err)
    })
}

export const getCart = (data) => {
    return fetch(`${apiBaseUrl}/cart`,
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then((response) => {
      return response.json()
    }).catch((err) => {
      console.log(err)
    })
}

export const updateItem = (data) => {
    return fetch(`${apiBaseUrl}/cart/updatecart`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then((response) => {
      return response.json()
    }).catch((err) => {
      console.log(err)
    })
}

export const deleteCart = (data) => {
    return fetch(`${apiBaseUrl}/cart/deleteCart`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then((response) => {
      return response.json()
    }).catch((err) => {
      console.log(err)
    })
}

export const getCartSummary = (data) => {
    return fetch(`${apiBaseUrl}/cart/summary`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then((response) => {
        // console.log(response)
      return response.json()
    }).catch((err) => {
      console.log(err)
    })
}

// order api
export const saveOrder = (data) => {
  console.log(data)
    return fetch(`${apiBaseUrl}/saveOrder`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then((response) => {
      return response.json()
    }).catch((err) => {
      console.log(err)
    })
}

// export const saveOrder = (data) => {
    // return fetch(`${apiBaseUrl}/cart/deleteCart`,{
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(data)
    // }).then((response) => {
    //   return response.json()
    // }).catch((err) => {
    //   console.log(err)
    // })
// }