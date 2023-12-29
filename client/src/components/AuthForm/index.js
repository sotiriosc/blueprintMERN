import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { LOGIN, ADD_USER } from '../../utils/mutations';
import "bulma/css/bulma.css";
import "./style.css";

const AuthForm = ({ handleClose }) => {
  const [formState, setFormState] = useState({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [login, { error: loginError }] = useMutation(LOGIN);
  const [addUser, { error: signupError }] = useMutation(ADD_USER);
  const [activeTab, setActiveTab] = useState("signup");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
    setErrorMessage(''); // Clear any existing error messages
  };  

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    if (activeTab === "signup" && formState.password !== formState.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      let mutationResponse;
      if (activeTab === "login") {
        mutationResponse = await login({ variables: { email: formState.email, password: formState.password } });
      } else {
        mutationResponse = await addUser({ variables: { ...formState } });
      }

      const token = activeTab === "login" ? mutationResponse.data.login.token : mutationResponse.data.addUser.token;
      if (token) {
        Auth.login(token);
      } else {
        throw new Error("Token not found in response");
      }
    } catch (e) {
      console.error('Error during form submission:', e);
      setErrorMessage("An error occurred during submission.");
    }


};


  


  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{activeTab === "login" ? "Login" : "Sign Up"}</p>
          <button className="delete" aria-label="close" onClick={handleClose}></button>
        </header>
        <section className="modal-card-body">
          <div className="tabs is-toggle is-toggle-rounded">
            <ul>
              <li className={activeTab === "login" ? "is-active" : ""} onClick={() => setActiveTab("login")}>
                <a>Login</a>
              </li>
              <li className={activeTab === "signup" ? "is-active" : ""} onClick={() => setActiveTab("signup")}>
                <a>Sign Up</a>
              </li>
            </ul>
          </div>
  
          {/* Display error message for password mismatch or form submission errors */}
          {errorMessage && (
            <div className="notification is-danger">
              {errorMessage}
            </div>
          )}
  
  <form onSubmit={handleFormSubmit}>
          {activeTab === "signup" && (
            <>
              {/* Additional fields for signup */}
              <input className="input" placeholder="First Name" name="firstName" type="text" id="firstName" onChange={handleInputChange} />
              <input className="input" placeholder="Last Name" name="lastName" type="text" id="lastName" onChange={handleInputChange} />
              <input className="input" placeholder="youremail@test.com" name="email" type="email" id="email" onChange={handleInputChange} />
              <input className="input" placeholder="******" name="password" type="password" id="pwd" onChange={handleInputChange} />
              <input className="input" placeholder="Confirm Password" name="confirmPassword" type="password" id="confirmPwd" onChange={handleInputChange} />
            </>
          )}

          {activeTab === "login" && (
            <>
              {/* Fields for login */}
              <input className="input" placeholder="youremail@test.com" name="email" type="email" id="email" onChange={handleInputChange} />
              <input className="input" placeholder="******" name="password" type="password" id="pwd" onChange={handleInputChange} />
            </>
          )}
            {/* Display error message for login or signup errors */}
            {(loginError || signupError) && (
              <div className="notification is-danger">
                The provided credentials are incorrect
              </div>
            )}
  
            <button className="button is-success is-fullwidth" type="submit">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
            };
          

  export default AuthForm;