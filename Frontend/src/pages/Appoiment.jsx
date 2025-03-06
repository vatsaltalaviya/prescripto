import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctor from "../components/RelatedDoctor";

const Appoiment = () => {
  const { docId } = useParams();
  const { doctors , currencySymbol } = useContext(AppContext);
  const [doctorInfo, setDoctorInfo] = useState(null);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat"];
  const [slotdate, setslotdate] = useState({})
  const [booking, setBooking] = useState({})
  const [docSlot, setdocSlot] = useState([]);
  const [slotTime, setslotTime] = useState('');
  const [slotIndex, setslotIndex] = useState(0);

  const fetchdocInfo = async() => {
    //api call to fetch doctor info by id
    const doctorInfo = doctors.find((doc) => doc._id === docId);
    setDoctorInfo(doctorInfo);
    //set doctor info in context
  };
  
  const getAvalibleDoctSlot = async () =>{
    setdocSlot([])
    let today = new Date()

    for(let i = 0 ; i < 7 ; i++){

      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time of the date with index

      let endTime = new Date();
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0 , 0 , 0);
      
      //setting hours
      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 :0)

      }else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      //getting slots in current date
      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([],{hour:'2-digit', minute:'2-digit'})
      
        // adding time slots in array
        timeSlots.push({
          dateTime : new Date(currentDate),
          time : formattedTime

        })
      

        //increasing current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setdocSlot(perv =>([...perv , timeSlots]))
    }
  }

  useEffect(() => {
    fetchdocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvalibleDoctSlot();
  }, [doctorInfo]);



  return doctorInfo && (
    <div>
      {/* ------------ doc detail ------------- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className='w-full bg-primary sm:max-w-72 rounded-lg' src={doctorInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* ---------- doc info ---------------- */}
          <p className="flex items-center gap-2 text-2xl text-gray-900 font-medium">
            {doctorInfo.name} <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600 ">
            <p>
              {doctorInfo.degree}-{doctorInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{doctorInfo.experience}</button>
          </div>
          {/* -------------- doc about -------------- */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className="text-sm text-gray-600 max-w-[700px] mt-1">{doctorInfo.about}</p>
          </div>
          <p className="text-gray-500 font-medium mt-4">Appoiment Fees :{currencySymbol} <span className="text-gray-600">{doctorInfo.fees}</span></p>
        </div>
      </div>

      {/* ----------- booking slots -------------- */}

      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Slots</p>
        
        <div className="flex w-full overflow-x-scroll gap-3 items-center mt-4">
          {
             docSlot.length && docSlot.map((item, index)=>{
              return <div onClick={()=> {setslotIndex(index);setslotdate({day:daysOfWeek[item[0].dateTime.getDay()],date:item[0].dateTime.getDate()})}} className={`text-center py-6 rounded-full min-w-16 cursor-pointer ${slotIndex === index ? 'bg-primary text-white': 'border border-gray-200'} `} key={index}>
                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
              
            })
          }
        </div>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {
            docSlot.length && docSlot[slotIndex].map((item , index)=>{
              return <p onClick={()=>{setslotTime(item.time)}} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time == slotTime ? 'bg-primary text-white': 'border border-gray-200'}`} key={index}>
                {item.time.toLowerCase()}
              </p>
            })
          }
        </div>
        {
          console.log(booking)
        }
        <button onClick={()=>setBooking({doctorId:doctorInfo._id,bookingDate:slotdate,bookingTime:slotTime})} className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full mt-6">Book an Appooiment</button>
      </div>

      {/* related doctors */}
      <RelatedDoctor docId={docId} speciality={doctorInfo.speciality} />
    </div>
  );
};

export default Appoiment;
