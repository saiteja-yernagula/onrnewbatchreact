import { useNavigate } from "react-router-dom"
function Doctorcard({name,specialization,gender,id}) {
   let navigate=useNavigate()
  return (
    <div className="card">
        <div> <img
          src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
          width="100"/></div>
        <h1>{name}</h1>
        <p>{specialization}</p>
        <p>{gender}</p>
        <button onClick={()=>navigate(`/${id}`)}>View details</button>
    </div>
  )
}
export default Doctorcard