import React, { useState, useEffect } from "react";
import axios from "axios";
import PetList from "../components/PetList";
import { Link } from "@reach/router";

const Main = () => {
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets/all").then((res) => {
      setPets(res.data);
      setLoaded(true);
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        {" "}
        <div className="header">
          <h1>Pet Shelter</h1>
          <Link to="/pets/new">add a pet to the shelter</Link>
        </div>
        <p>These pets are looking for a good home</p>
        {loaded && <PetList pets={pets} />}
      </div>
    </>
  );
};

export default Main;
