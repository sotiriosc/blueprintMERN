import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import { SUBMIT_CONTACT_FORM } from '../utils/mutations';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Text = styled.p`
    text-align: center;
    font-size: 1.5em;
    color: #333;
    margin: 0 auto;
    padding: 10px;
    font-weight: bold;
`;

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
    const [submitContactForm, { data }] = useMutation(SUBMIT_CONTACT_FORM);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        console.log(ContactForm)
        const { data } = await submitContactForm({ variables: { ...formState } });
        alert('Message sent!');
        setFormState({ name: '', email: '', message: '' });
      } catch (e) {
        console.error('Error:', e);
        alert('Error sending message.');
      }
    };
  
    const handleChange = e => {
      setFormState({...formState, [e.target.name]: e.target.value })
    };
  
    return (
      <section>
        <Text>Let's Talk!</Text>
        <Text>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</Text>
        <Form id="contact-form" onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Your name" defaultValue={formState.name} onBlur={handleChange} />
          <Input type="email" name="email" placeholder="Your email" defaultValue={formState.email} onBlur={handleChange} />
          <TextArea name="message" rows="5" placeholder="Your message" defaultValue={formState.message} onBlur={handleChange} />
          <Button type="submit">Send</Button>
        </Form>
      </section>
    );
  }
  
  export default ContactForm;