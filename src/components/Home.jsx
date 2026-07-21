import { useState,useEffect } from "react"
import Doctorcard from "./Doctorcard";
function Home() {
    let [doctors,setDoctors]=useState([])
    function fetchdata(){
         let data = [
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
      },

      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
      },

      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
      },
    ];
    setDoctors(data)
    }
    useEffect(()=>{
      fetchdata()
    },[])
  return (
    <div className='doctorcontainer'>
       {doctors.map((doctor)=>{
        return (
            <Doctorcard key={doctor.id} name={doctor.name} gender={doctor.gender} specialization={doctor.specialization}/>
        )
       })}
    </div>
  )
}

export default Home