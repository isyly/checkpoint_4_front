import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import "./Form.css";

export default function Form({ setCallAPI }) {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && manufacturer && image) {
      // alert(`Console ${manufacturer} ${name} Created`);
      const body = {
        name,
        manufacturer,
        image,
      };
      axios({
        method: "POST",
        url: "http://localhost:8000/api/consoles",
        data: body,
      }).then(data => {
        console.log(data);
        setCallAPI( prevState => !prevState);
        history.push('/');
      });
    } else {
      alert("You must provide all information");
    }
  };

  return (
    <div className="form_container">
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <h2 id="title">Create Art Portfolio</h2>
        <label htmlFor="name" className="form_label">
          Name :{" "}
          <input
            type="text"
            id="name"
            className="form_input"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label htmlFor="manufacturer" className="form_label">
          Manufacturer :{" "}
          <input
            type="text"
            id="manufacturer"
            className="form_input"
            value={manufacturer}
            onChange={(event) => setManufacturer(event.target.value)}
          />
        </label>
        <label htmlFor="image" className="form_label">
          Image :{" "}
          <input
            type="text"
            id="image"
            className="form_input"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
        <input className="button" type="submit" value="Create a new image" />
      </form>
    </div>
  );
}
