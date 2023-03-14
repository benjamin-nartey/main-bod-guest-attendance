import "./create-user.styles.css";
import { useState } from "react";

const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const CreateUserForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { username, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);
  return (
    <div className="create-user-container">
      <form className="registration-form" action="">
        <h3>Add New User</h3>
        <label>Username</label>
        <input
          value={username}
          type="text"
          name="username"
          className="text-input"
          required
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          value={email}
          type="email"
          name="email"
          className="text-input"
          required
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          value={password}
          type="password"
          name="password"
          className="text-input"
          required
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          value={confirmPassword}
          type="password"
          name="confirmPassword"
          className="text-input"
          required
          onChange={handleChange}
        />
        <button type="submit" className="register">
          Register
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
