import React, { useState,useEffect } from "react";
import "./index.css";
import Pets from "./Table_Pets";
const PetForm = ({ user }) => {
  console.log(user.id)
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [pets, setPets] =useState([]);
  const[reload, setReload] = useState(false);

  useEffect(() => {
    fetch(`/users/${user.id}/pets`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setPets(data);
      });
  }, [reload]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`/users/${user.id}/pets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          breed,
          age,
          name,
          species,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add pet");
      }

      setBreed("");
      setAge("");
      setName("");
      setSpecies("");
      setIsLoading(false);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to add pet");
      setIsLoading(false);
    }
    window.location.reload();

  };
function updateWindow(){
  setReload(reload=>!reload)
}
  return (
    <>
      <form onSubmit={handleSubmit} method="post" action="/pets">
        <input type="hidden" name="authenticity_token" value={window._token} />
        <div className="pet-form">
          <div>
            <label className="pet-form-label">
              Name:
              <input
                className="pet-form-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="pet-form-label">
              Breed:
              <input
                className="pet-form-input"
                type="text"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="pet-form-label">
              Age:
              <input
                className="pet-form-input"
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="pet-form-label">
              Species:
              <input
                className="pet-form-input"
                type="text"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
              />
            </label>
          </div>
        </div>
        {/* <label className="pet-form-label">
        Category:
        <input
          className="pet-form-input"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label> */}
        {isLoading ? (
          <p className="pet-form-loading">Loading...</p>
        ) : (
          <div className="pet-form-button">
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        )}
        {errorMessage && <p className="pet-form-error">{errorMessage}</p>}
      </form>

      <Pets user={user} pets={pets} updateWindow={updateWindow} />
    </>
  );
};

export default PetForm;
