// import React from 'react';
// import chair from '../../assets/images/chair.png'

// const Banner = () => {
//     return (
//         <div>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <img src={chair} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
//                     <div>
//                         <h1 className="text-5xl font-bold">Box Office News!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in.<br></br>
//                          Quaerat fugiat ut assumenda excepturi exercitationem quasi.<br></br>
//                           In deleniti eaque aut repudiandae et a id nisi.</p>
//                         <button className="btn btn-primary">Get Started</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;

import React from 'react';
import s1 from '../../assets/slider-books/s1.jpg'
import s2 from '../../assets/slider-books/s2.jpg'
import s3 from '../../assets/slider-books/s3.jpg'

import './Banner.css'
import BannerItem from './banneritem';

const bannerData = [
    {
        image: s1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: s2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: s3,
        prev: 2,
        id: 3,
        next: 4
    },
   
]
const Banner = () => {


    return (
        <div>
            <div className="carousel w-full">

            {
                bannerData.map(slide =><BannerItem
                key={slide.id}
                slide={slide}
                ></BannerItem>)
            }
            </div>
        </div>
    );
};

export default Banner;