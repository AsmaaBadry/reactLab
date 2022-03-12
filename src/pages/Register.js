import React from 'react'

import { useEffect, useState } from "react";

export default function Register() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    username: "",
    passward: "",
    confirmPassward: "",
  });
  const [userFormErrors, setUserFormError] = useState({
    nameErr: null,
    emailErr: null,
    usernameErr: null,
    passwardErr: null,
    confirmPasswardErr: null,
  });

  useEffect(() => {
    console.log(userForm);
  }, [userForm]);

  const handleFormChange = (e) => {
    if (e.target.name === "name") {
      setUserForm({
        ...userForm,
        name: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        nameErr:
          e.target.value.length === 0
            ? "This field is required"
            : null,
      });
    } else if (e.target.name === "email") {
      setUserForm({
        ...userForm,
        email: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        emailErr:
          e.target.value.length === 0
            ? "This field is required"
            : (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value))
              ? "Invalid email format"
              : null,
      });
    } else if (e.target.name === "username") {
      setUserForm({
        ...userForm,
        username: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        usernameErr:
          e.target.value.length === 0
            ? "This field is required"
            : (!/^[A-Z]{2,}$/i.test(e.target.value))
              ? "Invalid username format"
              : null,
      });
    } else if (e.target.name === "passward") {
      setUserForm({
        ...userForm,
        passward: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        passwardErr:
          e.target.value.length === 0
            ? "This field is required"
            : (!/^[A-Z0-9._%+-@#$^&*]{8,}$/i.test(e.target.value))
              ? "Invalid passward format"
              : null,
      });
    } else if (e.target.name === "confirmPassward") {
      setUserForm({
        ...userForm,
        confirmPassward: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        confirmPasswardErr:
          e.target.value.length === 0
            ? "This field is required"
            : (e.target.value === userFormErrors.passwordErr.value)
              ? " not match previous password"
              : null,
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userForm);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${userFormErrors.nameErr ? "border-danger" : ""
              }`}
            name="name"
            aria-describedby="nameHelp"
            value={userForm.name}
            onChange={(e) => handleFormChange(e)}
          />
          <div id="nameHelp" className="text-danger form-text">
            {userFormErrors.nameErr}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className={`form-control ${userFormErrors.emailErr ? "border-danger" : ""
              }`}
            name="email"
            aria-describedby="emailHelp"
            value={userForm.email}
            onChange={(e) => handleFormChange(e)}
          />
          <div id="emailHelp" className="text-danger form-text">
            {userFormErrors.emailErr}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className={`form-control ${userFormErrors.usernameErr ? "border-danger" : ""
              }`}
            name="username"
            aria-describedby="usernameHelp"
            value={userForm.username}
            onChange={(e) => handleFormChange(e)}
          />
          <div id="usernameHelp" className="text-danger form-text">
            {userFormErrors.usernameErr}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="passward" className="form-label">
            Passward
          </label>
          <input
            type="passward"
            className="form-control"
            name="passward"
            value={userForm.passward}
            aria-describedby="passwardHelp"
            onChange={(e) => handleFormChange(e)}
          />
          <div id="passwardHelp" className="text-danger form-text">
            {userFormErrors.passwardErr}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassward" className="form-label">
            confirmPassward
          </label>
          <input
            type="passward"
            className="form-control"
            name="confirmPassward"
            value={userForm.confirmPassward}
            aria-describedby="confirmPasswardHelp"
            onChange={(e) => handleFormChange(e)}
          />
          <div id="confirmPasswardHelp" className="text-danger form-text">
            {userFormErrors.confirmPasswardErr}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

// Create Form Fields
// Create Form State with Values
// Define value attribute on fields and onChange function
// Define onChange function
// [Switch case or if condition] Set e.target.value in each key changed
// Define the errors state
// Handle Errors in onChange function based on the changed key
// Define onSubmit Function and prevent Default


