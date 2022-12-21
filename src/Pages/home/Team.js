import React from 'react';
import img1 from '../../assets/team/t1.jpg'
import img2 from '../../assets/team/t2.jpg'
import img3 from '../../assets/team/t3.jpg'


const Team = () => {
    return (
       <div className='my-10'>
        <h1 className='text-center text-2xl font-bold'>Our team</h1>
         <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 my-10'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Anni Marry</h2>
                    <p>Our cheap seller</p>
                    
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Adam Hobs</h2>
                    <p>Our cheap distributer.</p>
                    
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Merry quin</h2>
                    <p>Our customer care officer.</p>
                    
                </div>
            </div>
           
        </div>
       </div>
    );
};

export default Team;