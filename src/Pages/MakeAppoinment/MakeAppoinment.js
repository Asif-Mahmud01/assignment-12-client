import React from 'react';
import logo from '../../assets/images/logo4.jpg'
import './MakeAppoinment.css'
import { Link} from 'react-router-dom';

const MakeAppoinment = () => {
    return (
        <div>
            <section className='bg-slate-600' 
            
            >
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={logo} alt='' className="max-w-sm rounded-lg hidden md:block lg:block shadow-2xl" />
                        <div className='ml-10'>
                            <h4 className='text-primary text-white'>Appointment</h4>
                            <h1 className="text-5xl font-bold text-white">Make an order</h1>
                            <p className="py-6 text-white">If your pictures aren't good enough, you're not close enough.” “Taking pictures is savoring life intensely, every hundredth of a second.” “Your first 1,000 photographs are your worst.” “The best thing about a picture is that it never changes, even when the people in it do.”</p>
                            <Link to='/dashboard'><button className="btn btn-primary">Lets go</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MakeAppoinment;