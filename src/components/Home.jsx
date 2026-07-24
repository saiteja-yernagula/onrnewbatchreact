import { useState, useEffect } from "react";
import axios from "axios";
import Doctorcard from "./Doctorcard";
function Home({ newdoctor }) {
  let [doctors, setDoctors] = useState([]);

  let [search, setSearch] = useState("");
  let [specialization, setSpecialization] = useState("");
  async function fetchdata() {
  let response=await axios.get('https://doc-back.onrender.com/doctors')
        setDoctors(response.data)
        console.log(response.data)
  }
  useEffect(() => {
    fetchdata();
  }, [newdoctor]);

  // useEffect(() => {
  //   if (newdoctor) {
  //     setDoctors((prev) => [...prev, newdoctor]);
  //   }
  // }, [newdoctor]);

  let filtereddoctors = doctors.filter((val) => {
    return (
      val.name.toLowerCase().includes(search.toLowerCase()) &&
      (specialization == "" ||
        val.specialization.toLowerCase() == specialization.toLowerCase())
    );
  });
  return (
    <>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="search your doctor"
        />
        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          name=""
          id=""
        >
          <option value="Bones">Bones</option>
          <option value="Heart">Heart</option>
          <option value="Muscles">Muscles</option>
        </select>
      </div>
      <div className="doctorcontainer">
        {filtereddoctors.length > 0 ? (
          filtereddoctors.map((doctor) => {
            return (
              <Doctorcard
                key={doctor.id}
                name={doctor.name}
                gender={doctor.gender}
                specialization={doctor.specialization}
                id={doctor.id}
              />
            );
          })
        ) : (
          <h1>Loading......</h1>
        )}
      </div>
    </>
  );
}

export default Home;
