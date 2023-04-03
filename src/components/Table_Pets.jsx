import React from "react";
import { Link } from "react-router-dom";
function Table_Pets({ user ,pets,updateWindow}) {

  function handleDelete(id){
    fetch(`/users/${user.id}/pets/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        
    })
    updateWindow()
  }
 
  return (
    <div className="pet_table">
      <h1>My Pets</h1>
      <tr className="table-row">
        <th>Pet Name</th>
        <th>Breed</th>
        <th>Request Appointment</th>
        <th>Remove</th>

      </tr>
      {pets.map((pets, index) => (
        <tr className="button-insert">
          <td>{pets.name}</td>
          <td>{pets.breed}</td>
          <td>{pets.specie}</td>
          <td>
            <Link to={`/appointments/${pets.id}`}>

            <button >Book Appointment</button>
            </Link>
          </td>
          <td>
            <button onClick={()=>handleDelete(pets.id)}>Remove pet</button>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table_Pets;
