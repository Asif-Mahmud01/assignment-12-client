import React, { useEffect, useState } from 'react';
import CategoriesShow from './CategoriesShow';


const Categories = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://book-mart-server-1.vercel.app/categories')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='my-8 grid grid-cols-3'>

            {
                data.map((param) => <CategoriesShow key={param._id} data={param}></CategoriesShow>)
            }
        </div>
    );
};

export default Categories;