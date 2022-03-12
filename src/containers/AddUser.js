import { useEffect, useState } from "react";

export default function AddUser() {
  const [userForm, setUserForm] = useState({
    username: "",
    age: "",
  });
  const [userFormErrors, setUserFormError] = useState({
    usernameErr: null,
    ageErr: null,
  });

  useEffect(() => {
    console.log(userForm);
  }, [userForm]);

  const handleFormChange = (e) => {
    if (e.target.name === "username") {
      setUserForm({
        ...userForm,
        username: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        usernameErr:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.length < 3
              ? "Min. Length is 3 characters"
              : null,
      });
    } else if (e.target.name === "age") {
      setUserForm({
        ...userForm,
        age: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        ageErr:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value < 25
              ? "Min. age is 25 years old"
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
      <h2>AddUser</h2>
      <form onSubmit={(e) => handleFormSubmit(e)}>
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
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={userForm.age}
            aria-describedby="ageHelp"
            onChange={(e) => handleFormChange(e)}
          />
          <div id="ageHelp" className="text-danger form-text">
            {userFormErrors.ageErr}
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
