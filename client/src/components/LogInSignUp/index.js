import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Alert, ToggleButton } from 'react-bootstrap';

import { MUTATION_ADD_USER, MUTATION_LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginSignup = () => {
  const [newUser, setNewUser] = useState(false);
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [addUser] = useMutation(MUTATION_ADD_USER);
  const [loginUser] = useMutation(MUTATION_LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      let data;
      if (newUser) {
        data = await addUser({ variables: { ...userFormData } });
      } else {
        data = await loginUser({ variables: { ...userFormData } });
      }

      if (!data) {
        throw new Error('something went wrong!');
      }

      const { token } = newUser ? data.data.addUser : data.data.login;
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <ToggleButton
        id='toggle-check'
        type='checkbox'
        variant='outline-primary'
        checked={newUser}
        value='1'
        onChange={(e) => setNewUser(e.currentTarget.checked)}
      >
        {newUser ? 'Register' : 'Login'}
      </ToggleButton>

      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        {newUser && (
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='username'>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your username'
              name='username'
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
            <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
          </Form.Group>
        )}

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          {newUser ? 'Signup' : 'Login'}
        </Button>
      </Form>
    </>
  );
};

export default LoginSignup;
