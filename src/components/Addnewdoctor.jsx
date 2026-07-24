import { useState } from "react"
import Home from "./Home"
import axios from "axios"
function Addnewdoctor() {
    let [name,setName]=useState('')
    let [age,setAge]=useState('')
    let [gender,setGender]=useState('')
    let [specialization,setSpecialization]=useState('')
    let [salary,setSalary]=useState('')
    
   let [newdoctor,setNewdoctor]=useState(null)
    async function handleform(e){
        e.preventDefault()
        let formdetails={id:Date.now(),name,age,gender,specialization,salary}
        await axios.post('https://doc-back.onrender.com/doctors',formdetails)
        setNewdoctor(formdetails)
        alert('data posted to api')

        setName('')
        setGender('')
        setSpecialization('')
        setAge('')
        setSalary('')
    }
  return (
    <div>
        <h1>Add New Doctor</h1>
        <form action="" className="formcontainer" onSubmit={handleform}>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text"  placeholder="enter doctor name"/>
            <input value={age} onChange={(e)=>setAge(e.target.value)}  type="text" placeholder="enter age"/>
            <select name="" id="" value={gender} onChange={(e)=>setGender(e.target.value)} >
                <option value="">Select gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input type="text" value={specialization} onChange={(e)=>setSpecialization(e.target.value)}   placeholder="enter specialization"/>
            <input type="text" value={salary} onChange={(e)=>setSalary(e.target.value)}   placeholder="enter salary"/>
            <button type='submit'>Add Doctor</button>
        </form>
        <Home newdoctor={newdoctor}/> 
    </div>
  )
}

export default Addnewdoctor