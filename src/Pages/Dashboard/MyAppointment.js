import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Firebase/AuthProvider';

const MyAppointment = ({treatment}) => {

    // const {name } = treatment

    // const { name: treatmentName, name, price } = treatment
    const { user } = useContext(AuthContext)
    const url = `https://book-mart-server-1.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i}</th>
                                <td>{booking.treatment}</td>
                                <td>{booking.email}</td>
                                <td>{booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-primary btn-sm'>Pay</button>
                                        </Link>
                                    }
                                    
                                    {
                                        booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;