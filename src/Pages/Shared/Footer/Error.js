import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../assets/images/error2.jpg'

const Error = () => {
    return (
        <div className='grid justify-center '>
            <img className='w-80' src={error} alt="" />
            <h2 className='mt-10'>If you want to go back click here: <button className='btn btn-sm btn-primary'><Link to='/'>Home</Link></button></h2>
        </div>
    );
};

export default Error;