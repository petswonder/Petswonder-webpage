//add to cart
export const getAllGuides = () =>{
    return fetch(`https://petswonder.co.in/petswonder/api/petsGuide/getAllPetsGuide`,{
        method: "POST",
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}


export const getAllDoctors = () =>{
    return fetch(`https://petswonder.co.in/petswonder/api/doctor/getAllDoctors`,{
        method: "POST",
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}

