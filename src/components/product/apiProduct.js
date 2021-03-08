

//get all prooducts
export const getProducts = () =>{
    return fetch(`https://petswonder.co.in/petswonder/api/productUpload/getProducts?category=all&species=all`,{
        method: "POST",
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}


//get searched prooducts
export const list = (search) =>{
    return fetch(`https://petswonder.co.in/petswonder/api/productUpload/searchProducts?search=${search}`,{
        method: "POST",
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}


//get product by pets
export const productByPets = (name) =>{
    return fetch(`https://petswonder.co.in/petswonder/api/productUpload/getProducts?category=all&species=${name}`,{
        method: "POST",
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}


//get product by category
export const productByCategory = ({name, pet}) =>{
    return fetch(`https://petswonder.co.in/petswonder/api/productUpload/getProducts?category=${name}&species=${pet}`,{
        method: "POST",
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}


export const productBySubCategory = ({name, pet, sub}) =>{
    return fetch(`https://petswonder.co.in/petswonder/api/productUpload/getProducts?category=${sub}&species=${pet}`,{
        method: "POST",
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}


//get product by brand
export const productByBrand = (name) =>{
    return fetch(`https://petswonder.co.in/petswonder/api/productUpload/getProductsByBrand?brand=${name}`,{
        method: "POST",
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}


export const lol = (name) =>{
    return fetch(`https://petswonder.co.in/petswonder/api/productUpload/getProducts?category=Food&species=all`,{
        method: "POST",
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}

