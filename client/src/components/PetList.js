import React from "react";
import { Link } from "@reach/router";

const PetList = (props) => {
  const { pets } = props;
  return (
    <>
      <table className="listTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets
            .sort((a, b) => {
              if (a.petType < b.petType) return -1;
            })
            .map((pet, index) => (
              <tr key={index}>
                <td>{pet.name}</td>
                <td>{pet.petType}</td>
                <td>
                  <Link to={"/pets/" + pet._id}>details</Link> |{" "}
                  <Link to={"/pets/" + pet._id + "/edit"}>edit</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default PetList;
