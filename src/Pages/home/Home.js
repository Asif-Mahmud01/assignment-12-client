import React from 'react';
import Categories from '../Appointment/Categories';
import Banner from '../Banner/Banner'
import Dashboard from '../Dashboard/Dashboard';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonial from '../Testimonial/Testimonial';
import Team from './Team';

const Home = () => {
    
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <Categories></Categories>
           <InfoCards></InfoCards>
           <MakeAppoinment></MakeAppoinment>
           <Team></Team>
           <Testimonial></Testimonial>
           <Dashboard></Dashboard>
        </div>
    );
};

export default Home;