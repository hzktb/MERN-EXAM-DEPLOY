import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import Form from "../components/Form";

const Update = (props) => {
  const { id } = props;
  const [pet, setPet] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [uniqueNameError, setUniqueNameError] = useState("");
  const [nameError, setNameError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [descError, setDescError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/" + id)
      .then((res) => {
        setPet(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (pet) => {
    axios
      .put("http://localhost:8000/api/pets/" + id + "/edit", pet)
      .then((res) => navigate("/"))
      .catch((err) => {
        const error = err.response.data.errors;
        if (error && error.name) {
          setNameError(error.name.message);
          setUniqueNameError("");
        } else if (err.response.data.uniqueNameMessage) {
          setNameError("");
          setUniqueNameError(err.response.data.uniqueNameMessage);
        } else {
          setNameError("");
        }

        if (error && error.petType) {
          setTypeError(error.petType.message);
        } else {
          setTypeError("");
        }

        if (error && error.description) {
          setDescError(error.description.message);
        } else {
          setDescError("");
        }
      });
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Pet Shelter</h1>
        <Link to="/">back to home</Link>
      </div>
      {loaded && (
        <>
          <h3>Edit: {pet.name}</h3>
          <Form
            initialName={pet.name}
            initialType={pet.petType}
            initialDesc={pet.description}
            initialSkill1={pet.skill1}
            initialSkill2={pet.skill2}
            initialSkill3={pet.skill3}
            buttonName="Edit Pet"
            onSubmitProp={handleUpdate}
            uniqueNameError={
              uniqueNameError ? <span>{uniqueNameError}</span> : null
            }
            nameError={nameError ? <span>{nameError}</span> : null}
            typeError={typeError ? <span>{typeError}</span> : null}
            descError={descError ? <span>{descError}</span> : null}
          />
        </>
      )}
    </div>
  );
};

export default Update;
