import React, { useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import { navigate, Link } from "@reach/router";

const Create = (props) => {
  const [uniqueNameError, setUniqueNameError] = useState("");
  const [nameError, setNameError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [descError, setDescError] = useState("");
  const handleCreate = (newPet) => {
    axios
      .post("http://localhost:8000/api/pets/new", newPet)
      .then((res) => {
        navigate("/");
      })
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
          setUniqueNameError("");
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
      <p>Know a pet needing a home?</p>
      <Form
        initialName=""
        initialType=""
        initialDesc=""
        initialSkill1=""
        initialSkill2=""
        initialSkill3=""
        buttonName="Add Pet"
        onSubmitProp={handleCreate}
        uniqueNameError={
          uniqueNameError ? <span>{uniqueNameError}</span> : null
        }
        nameError={nameError ? <span>{nameError}</span> : null}
        typeError={typeError ? <span>{typeError}</span> : null}
        descError={descError ? <span>{descError}</span> : null}
      />{" "}
    </div>
  );
};

export default Create;
