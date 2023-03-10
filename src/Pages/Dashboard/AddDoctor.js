import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate()

    console.log('image db', imageHostKey)

    const { data: specialities, isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('https://book-mart-server-1.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        image: imgData.data.url,
                        price: data.price,
                        phone: data.phone,
                        condition: data.condition
                    }
                    fetch('https://book-mart-server-1.vercel.app/doctors', {
                        method: 'POSt',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is addeded successfully`)
                            navigate('/dashboard/manageDoctors')
                        })

                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add your product</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)} >

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Input book's name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("name",)} />
                    {errors.name && <p role="alert">{errors.name?.message}</p>}

                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("price",
                        { required: 'email address is required' })} />
                    {errors.price && <p role="alert">{errors.price?.message}</p>}


                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("phone",
                        { required: 'email address is required' })} />
                    {errors.phone && <p role="alert">{errors.phone?.message}</p>}

                    <label className="label">
                        <span className="label-text">Condtion</span>
                    </label>
                    <select {...register('condition')} className="select input-bordered w-full max-w-xs">
                        <option disabled selected>Pick condition</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                        
                    </select>

                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select {...register('speciality')} className="select input-bordered w-full max-w-xs">
                        <option disabled selected>Pick a speciality</option>
                        {
                            specialities.map(speciality => <option
                                key={speciality._id}
                                value={speciality.name}
                            >{speciality.name}
                            </option>)
                        }
                    </select>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("image",)} />
                    {errors.img && <p role="alert">{errors.img?.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-5' value='Add book' type="submit" />
                
                <button className='btn btn-outline w-full'>Continue with google</button>
            </form>
        </div>
    );
};

export default AddDoctor;