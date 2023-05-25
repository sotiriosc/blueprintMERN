import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { gql } from '@apollo/client';

function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const history = useNavigate();

    const REGISTER_USER = gql`
    mutation Register($name: String!, $email: String!, $password: String!) {
        register(name: $name, email: $email, password: $password) {
            id
            name
            email
        }
    }
    `;

    const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
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
        registerUser();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={onChange} />
                <input type="email" name="email" placeholder="Email" onChange={onChange} />
                <input type="password" name="password" placeholder="Password" onChange={onChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
