import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";
import { navigate, Link } from "@reach/router";

const Detail = (props) => {
  const { id } = props;
  const [pet, setPet] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/" + id)
      .then((res) => {
        setPet(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Pet Shelter</h1>
        <Link to="/">back to home</Link>
      </div>
      {loaded && (
        <>
          <h3>
            Details about: {pet.name}{" "}
            <DeleteButton
              id={id}
              buttonName={"Adopt " + pet.name}
              onDeleteProp={() => navigate("/")}
            />
          </h3>
          <table className="detailTable">
            <tbody>
              <tr>
                <td>Pet type:</td>
                <td>{pet.petType}</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{pet.description}</td>
              </tr>
              <tr>
                <td>skills:</td>
                <td>
                  <ul>
                    <li>{pet.skill1}</li>
                    <li>{pet.skill2}</li>
                    <li>{pet.skill3}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Detail;
