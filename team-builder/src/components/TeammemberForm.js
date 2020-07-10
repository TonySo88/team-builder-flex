import React, { useState } from "react";

const TeammemberForm = (props) => {
  const [teammember, setTeammember] = useState({
    id: Date.now(),
    name: "",
    email: "",
    title: "",
  });
  const changeHandler = (event) => {
    setTeammember({
      ...teammember,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setTeammember({ id: Date.now(), name: "", email: "", title: "" });
      }}
    >
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Please Enter Your Name"
        value={teammember.name}
        onChange={changeHandler}
      />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="Please Enter Your Email"
        value={teammember.email}
      />
      <label htmlFor="title">Title: </label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Please Enter Your Title"
        value={teammember.title}
      />
      <button type="submit">Click to Submit!</button>
    </form>
  );
};

export default TeammemberForm;
