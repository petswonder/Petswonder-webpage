import React,{useEffect} from 'react'

const AboutUs = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return (
        <div className="container about">
            <h1 className="about-haedings">About PetsWonder</h1>
            <p>Founded in 2020, Pets Wonder is the specialty pet retailer of services and solutions for the lifetime needs of pets. At Pets Wonder, we love pets and we believe pets make us better people. Every day with every connection, Pets Wonder's passionate associates help bring pet parents closer to their pets so that they can live more fulfilled lives. This vision impacts everything we do for our customers, the way we support our associates and how we give back to our communities.</p>
            <h1 className="about-haedings">Our Vision</h1>
            <p>Pets Wonder provides a wide range of pet products, accessories and services including grooming and mating for pets. Pets Wonder is also very active in the community of pet owners providing education and awareness in becoming a socially responsible pet owner. Expert veterinarian care is available 24*7 through online consultation with a promise to provide intuitive, reassuring and informative service.</p>
            <h1 className="about-haedings">Our Mission</h1>
            <p>To be the most trusted  and convenient online destination for pet parents. Pets Wonder also support in raising awareness of the plight of forgotten and abandoned pets by partnering with several animal welfare organizations to bring adoptable pets, so they have the best chance possible of finding a forever home.</p>
        </div>
    )
}

export default AboutUs
