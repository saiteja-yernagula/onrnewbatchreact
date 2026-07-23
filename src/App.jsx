import { Route, Routes } from 'react-router-dom'
import Addnewdoctor from './components/Addnewdoctor.jsx'
// import Doctorcard from './components/Doctorcard.jsx'
import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx'
import './components/styles.css'
import Doctordetails from './components/Doctordetails.jsx'
// import { useState } from 'react'
// import { useEffect } from 'react'
function App() {
  // const [count,setCount]=useState(0)
  // const [apicount,setApicount]=useState(0)
  // useEffect(()=>{
  //   console.log('api calling-data')
  // },[apicount])  

  return (
    <div>
      <br /> 
      {/* {count}
      <button onClick={()=>setCount(count+1)}>click to inc count</button> 
           {apicount}
      <button onClick={()=>setApicount(apicount+1)}>click to inc count</button> 
      */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Section/>}/>
        <Route path='/adddoctor' element={<Addnewdoctor/>}/>
        <Route path='/:id' element={<Doctordetails/>}/>
      </Routes>
      
      {/* <Section/>

      <div className="doctorcontainer">
      <Doctorcard name="sivaram" gender="male" specialization="Bones Spl"/>
      <Doctorcard name="Teja" gender="male" specialization="Muscles Spl"/>
      <Doctorcard name="Vasavi" gender="female" specialization="psycholgy Spl"/>
      <Doctorcard name="Madhu" gender="male" specialization="Ortho Spl"/>
      <Doctorcard name="Sairam" gender="male" specialization="Multi Spl"/>
      <Doctorcard name="Bhanu" gender="male" specialization="Neuro Spl"/>
      </div>
      <Addnewdoctor/> */}


    </div>
  )
}

export default App