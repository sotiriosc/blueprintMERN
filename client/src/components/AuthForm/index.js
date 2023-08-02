import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { LOGIN, ADD_USER } from '../../utils/mutations';
import "bulma/css/bulma.css";
import "./style.css";

const AuthForm = ({handleClose}) => {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [login, { error: loginError }] = useMutation(LOGIN);
  const [addUser, { error: signupError }] = useMutation(ADD_USER);
  const [activeTab, setActiveTab] = useState("signup");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (activeTab === "login") {
      try {
        const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    } else if (activeTab === "signup") {
      try {
        const mutationResponse = await addUser({ variables: { ...formState } });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
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

          <form onSubmit={handleFormSubmit}>
            {activeTab === "signup" && (
              <>
                <input className="input" placeholder="First Name" name="firstName" type="text" id="firstName" onChange={handleInputChange} />
                <input className="input" placeholder="Last Name" name="lastName" type="text" id="lastName" onChange={handleInputChange} />
              </>
            )}
            <input className="input" placeholder="youremail@test.com" name="email" type="email" id="email" onChange={handleInputChange} />
            <input className="input" placeholder="******" name="password" type="password" id="pwd" onChange={handleInputChange} />
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