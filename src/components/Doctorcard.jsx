
function Doctorcard({name,specialization,gender}) {
   
  return (
    <div className="card">
        <div> <img
          src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
          width="100"/></div>
        <h1>{name}</h1>
        <p>{specialization}</p>
        <p>{gender}</p>
        <button>View details</button>
    </div>
  )
}

export default Doctorcard