import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


// hooks are used with functional components only not with ES6 components

function Login() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  //as someone start entering details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //someone click submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  // [formErrors]: This dependency array means that the effect will run whenever the formErrors state changes.

  useEffect(() => {

    // Check if there are no form errors and the form has been submitted
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Simulate a successful login
      setSuccessMessage("Login successful! Redirecting to dashboard...");

      // Redirect to the dashboard after a 2-second delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [formErrors]);


  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    //validating username
    if (!values.username) {
      errors.username = "Username is required!";
    }

    //validating email
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    //validating password
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      <h1 className="heading">Welcome on the JSON Portal</h1>

    
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>

     {/* //if logged in successfully then display success message*/}
      {successMessage && <div className="success-message">{successMessage}</div>}

    </div>
  );
}

export default Login;
