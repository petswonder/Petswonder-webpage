import React,{useEffect} from 'react'
import Layout from './Layout'
import Slider from './Slider'
import photo from '../../images/img7.jpg'
import Customer from './home/Customer'
import Extra from './Extra'
import Getall from './home/Getall'
import Vet from './home/Vet'
import Partner from './home/Partner'

const Home = () =>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return <div>
    {/* <Layout title="Home Page" description="Node React E-Commerce App" className="" > */}

        <Slider />
        <Customer />
        <Extra />
        <Getall />
        <Vet />
        <Partner />
    {/* </Layout> */}
    </div>
    
}

export default Home;