import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesShow = ({ data }) => {
    console.log()
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img className='h-64 w-11/12' src={data?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data?.name}</h2>
                    <p>{data?.details}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/categories/${data.name}`}><button className="btn btn-primary">Explore {data?.name} category</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesShow;