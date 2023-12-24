import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { fetchUserProfile } from '../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// import { Button } from '@material-ui/core';

const stripePromise = loadStripe('pk_test_51NFRHWBy17P1QCFTHMBKTdPb3voTwpxZ7N5d6PNs65YXZuAY7vi3jmQbNCj4Yo7ENCrVDIVHCoCDa59SoaKl2bcS00ASsBfLiL');

const MyProfile = () => {
  const { loading, data } = useQuery(fetchUserProfile);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (data) {
      console.log("MyProfile data",data);
      setUserData(data.fetchUserProfile); // Changed from data.userProfile
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data found</div>;
  }

  // Render user profile information
  return (
    <div style={{ margin: '20px' }}>
      <h1>My Profile</h1>
      <p>Name: {userData.firstName} {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Subscription Status: {userData.isSubscribed ? 'Subscribed' : 'Not Subscribed'}</p>
      {/* Add more user-specific information as needed */}
   
      <h2>Subscription Details</h2>
      <p>Price: $9.99 per month</p>
      <p>Benefits: Access to AI Personal Trainer for fitness guidance, exercise tips, diet advice, and more.</p>
      <button onClick={handleSubscriptionPurchase}>
  Purchase Subscription
</button>
      {/* Add a button or link to manage the subscription */}
    </div>
  );
};

// ... other code

async function handleSubscriptionPurchase() {
  const stripe = await stripePromise;

  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: 'price_1OOtI3By17P1QCFTPVjXwSZ7', quantity: 1 }],
    mode: 'subscription',
    successUrl: 'https://your-website.com/success',
    cancelUrl: 'https://your-website.com/cancel',
  });

  if (error) {
    console.error('Error redirecting to checkout:', error);
  }
}

export default MyProfile;
