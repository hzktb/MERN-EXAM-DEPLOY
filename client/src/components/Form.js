import React, { useState } from "react";

const Form = (props) => {
  const {
    initialName,
    initialType,
    initialDesc,
    initialSkill1,
    initialSkill2,
    initialSkill3,
    buttonName,
    onSubmitProp,
    uniqueNameError,
    nameError,
    typeError,
    descError,
  } = props;

  const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [desc, setDesc] = useState(initialDesc);
  const [skill1, setSkill1] = useState(initialSkill1);
  const [skill2, setSkill2] = useState(initialSkill2);
  const [skill3, setSkill3] = useState(initialSkill3);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp({
      name,
      petType: type,
      description: desc,
      skill1,
      skill2,
      skill3,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>
          <label htmlFor="name">Pet's Name: </label>

          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        {uniqueNameError}
        {nameError}
        <p>
          <label htmlFor="type">Pet's Type: </label>

          <input
            type="text"
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </p>
        {typeError}
        <p>
          <label htmlFor="desc">Pet's Description: </label>

          <input
            type="text"
            id="desc"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </p>
        {descError}
        <p>
          <input type="submit" className="submit" value={buttonName} />
        </p>
      </div>
      <div>
        <p>Skills (Optional): </p>
        <p>
          <label htmlFor="skill1">Pet's Skill 1: </label>

          <input
            type="text"
            id="skill1"
            name="skill1"
            value={skill1}
            onChange={(e) => setSkill1(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="skill2">Pet's Skill 2: </label>

          <input
            type="text"
            id="skill2"
            name="skill2"
            value={skill2}
            onChange={(e) => setSkill2(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="skill3">Pet's Skill 3: </label>

          <input
            type="text"
            id="skill3"
            name="skill3"
            value={skill3}
            onChange={(e) => setSkill3(e.target.value)}
          />
        </p>
      </div>
    </form>
  );
};

export default Form;
