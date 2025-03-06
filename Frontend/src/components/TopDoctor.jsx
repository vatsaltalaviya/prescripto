import React, { useContext } from 'react' 
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctor = () => {

    const {doctors} = useContext(AppContext)
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-sm text-center'>Simply browse through our extensive list of trusted doctors</p>
        <div className='w-full grid grid-auto-fill gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,10).map((item , index) =>(
                <div onClick={()=>{navigate(`/appoiment/${item._id}`); scrollTo(0,0)}} className='border border-blue-100 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full '></p><p>Avaliable</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
    <button onClick={()=>{navigate('/doctors'); scrollTo(0,0);}} className='bg-blue-50 text-gray-600 rounded-full px-12 py-3 mt-10'>More</button>
    </div>
  )
}

export default TopDoctor