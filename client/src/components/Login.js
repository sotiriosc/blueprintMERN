import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { gql } from '@apollo/client';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const history = useNavigate();

    const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        id
        email
        token
      }
    }
  `;

    const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
        update(proxy, result) {
            console.log(result);
            history.push('/blog');
        },
        variables: values
    });

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        loginUser();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={onChange} />
                <input type="password" name="password" placeholder="Password" onChange={onChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
