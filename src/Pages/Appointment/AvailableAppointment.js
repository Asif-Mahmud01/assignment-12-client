// import { useQuery } from '@tanstack/react-query';
// import { format } from 'date-fns/esm';
// import React, { useState } from 'react';
// import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
// import AppointmentModal from './AppointmentModal';
// import AppointmentOption from './AppointmentOption';

// const AvailableAppointment = ({ selectedDate }) => {
//     const [treatment, setTreatment] = useState(null)
//     const date = format(selectedDate, 'PP')
//     const { data: appointmentOptions = [], isLoading } = useQuery({
//         queryKey: ['appointmentOptions', date],
//         queryFn: async () => {
//             const res = await fetch(`https://book-mart-server-1.vercel.app/appointmentOptions?date=${date}`);
//             const data = await res.json();
//             return data
            
//         }
//     });

//     if(isLoading){
//         return <LoadingSpinner></LoadingSpinner>
//     }
   

//     return (
//         <div className='my-6'>
//             {/* <p className='text-primary text-center font-bold'>Available Appointment on {format(selectedDate, 'PP')}</p> */}
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
//                 {
//                     appointmentOptions.map(option => <AppointmentOption
//                         option={option}
//                         setTreatment={setTreatment}

//                     ></AppointmentOption>)
//                 }
//             </div>
//             {
//                 treatment &&
//                 <AppointmentModal
//                     treatment={treatment}
//                     selectedDate = {selectedDate}
//                     setTreatment={setTreatment}
//                 ></AppointmentModal>
//             }
//         </div>
//     );
// };

// export default AvailableAppointment;


import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {

    const loader = useLoaderData()
    console.log(loader);

    const [treatment, setTreatment] = useState(null)

    return (
        <div className='my-6'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    loader.map(option => <AppointmentOption
                        option={option}
                        setTreatment={setTreatment}

                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <AppointmentModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></AppointmentModal>
            }
        </div>
    );
};

export default AvailableAppointment;