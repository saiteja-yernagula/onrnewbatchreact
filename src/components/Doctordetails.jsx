import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from 'axios';
function Doctordetails() {
    let [doctor,setDoctor]=useState([])
    const {id}=useParams()
  async  function fetchdata(){
let response=await axios.get('https://doc-back.onrender.com/doctors')
        
    let doctor=response.data.find((val)=>val.id==id)
    setDoctor(doctor)
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>
        {doctor && 
        (
            <div>
                 <h1>{doctor.name}</h1>
                 <h3>{doctor.specialization}</h3    >
                 <p>{doctor.age}</p>
                 <p>{doctor.gender}</p>
                 <p>{doctor.salary}</p>
            </div>
        )}
    </div>
  )
}
export default Doctordetails