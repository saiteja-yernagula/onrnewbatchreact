import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
function Doctordetails() {
    let [doctor,setDoctor]=useState([])
    const {id}=useParams()
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
    let doctor=data.find((val)=>val.id==id)
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