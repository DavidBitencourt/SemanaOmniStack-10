import React, { useEffect, useState } from "react";
import "./styles.css";

function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position, "position");
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log(error);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername("");
    setTechs("");
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input
          name="github_username"
          id="github_username"
          value={github_username}
          type="text"
          onChange={e => {
            setGithubUsername(e.target.value);
          }}
          required
        />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          value={techs}
          type="text"
          onChange={e => {
            setTechs(e.target.value);
          }}
          required
        />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            name="latitude"
            id="latitude"
            value={latitude}
            type="number"
            onChange={e => {
              setLatitude(e.target.value);
            }}
            required
          />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            name="longitude"
            id="longitude"
            value={longitude}
            type="number"
            onChange={e => {
              setLongitude(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default DevForm;
