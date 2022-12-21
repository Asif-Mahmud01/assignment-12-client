import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Henry',
            img: people1,
            review: 'I am so glad that I stumbled across Book martt. I can’t say enough about how professional service is and the quality of work that he provides.',
            location: 'Canada'
        },
        {
            _id: 1,
            name: 'Zinson Henry',
            img: people2,
            review: 'I am so glad that I stumbled across Book martt. I can’t say enough about how professional service is and the quality of work that he provides. ',
            location: 'california'
        },
        {
            _id: 1,
            name: 'Alinson Henry',
            img: people3,
            review: 'I am so glad that I stumbled across Book martt. I can’t say enough about how professional service is and the quality of work that he provides.',
            location: 'London'
        }
    ]
    return (
        <div className='bg-slate-600'>
            <section className='my-6 ml-10'>
                <div className='flex justify-between my-6'>
                    <div className='mt-6'>
                        <h2 className='text-3xl text-white my-5'>What our clients say...</h2>
                    </div>
                </div>
                <div className='grid gap-5 lg:grid-cols-3 grid-cols-1'>
                    {
                        reviews.map(review => <Review 
                        key={review._id}
                        review = {review}
                        ></Review>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Testimonial;