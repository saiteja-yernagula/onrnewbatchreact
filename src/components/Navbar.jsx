import { useNavigate } from "react-router-dom"
function Navbar() {
  const navigate=useNavigate()
  return (
    <header>
        <h1>Doctor app</h1>
        <nav>
           <button onClick={()=>navigate('/')}>Home</button>
           <button  onClick={()=>navigate('/adddoctor')}>Add doctor </button>
        </nav>
    </header>
  )
}

export default Navbar