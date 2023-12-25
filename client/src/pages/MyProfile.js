import React, { useEffect, useState, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { fetchUserProfile } from '../utils/queries';
import { UPDATE_USER_SUBSCRIPTION, UPDATE_USER_STRIPE_ID } from '../utils/mutations';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51NFRHWBy17P1QCFTHMBKTdPb3voTwpxZ7N5d6PNs65YXZuAY7vi3jmQbNCj4Yo7ENCrVDIVHCoCDa59SoaKl2bcS00ASsBfLiL');



const MyProfile = () => {
  const { loading, data, refetch } = useQuery(fetchUserProfile, {
    fetchPolicy: 'network-only'
  });
  console.log('useQuery data:', data); // Log the data returned by useQuery
  
  const [userData, setUserData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (data) {
      setUserData(data.fetchUserProfile);
      console.log("Fetched user data:", data);
    }
  }, [data]);

  const [updateUserSubscription, { loading: updating, error }] = useMutation(UPDATE_USER_SUBSCRIPTION);
  const [updateUserStripeId] = useMutation(UPDATE_USER_STRIPE_ID);
  const [hasUpdated, setHasUpdated] = useState(false);

 

  const handleSubscriptionUpdate = async () => {
    if (data?.fetchUserProfile) {
      try {
        const response = await updateUserSubscription({
          variables: { userId: data.fetchUserProfile._id, isSubscribed: !data.fetchUserProfile.isSubscribed },
        });
        console.log('Subscription status updated:', response.data.updateUserSubscription);
        refetch();
      } catch (error) {
        console.error('Error updating subscription:', error);
      }
    }
  };

  const handleStripeCustomerIdUpdate = async (stripeCustomerId) => {
    if (data?.fetchUserProfile) {
      try {
        await updateUserStripeId({
          variables: { userId: data.fetchUserProfile._id, stripeCustomerId },
        });
        refetch();
      } catch (error) {
        console.error('Error updating Stripe customer ID:', error);
      }
    }
  };
  
  const getStripeCustomerId = () => {
    // Implement the logic to retrieve the customer ID from Stripe's response
    
    const urlParams = new URLSearchParams(window.location.search);
    const stripeCustomerId = urlParams.get('customer');
    console.log("Stripe customer ID:", stripeCustomerId);

    return "stripe-customer-id";
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const checkoutSuccess = urlParams.get('checkout');
    const stripeCustomerId = urlParams.get('customer_id'); // Assuming Stripe redirects back with a customer_id parameter
  
    if (checkoutSuccess === 'success' && !hasUpdated) {
      handleSubscriptionUpdate();
      if (stripeCustomerId) {
        handleStripeCustomerIdUpdate(stripeCustomerId);
      }
      setHasUpdated(true);
    }
  }, [handleSubscriptionUpdate, handleStripeCustomerIdUpdate, hasUpdated]);
  
  

  const handleCheckout = async () => {
    const token = localStorage.getItem('id_token'); // Retrieve the stored token
  
    if (!token) {
      console.error('No authentication token found');
      return;
    }
    console.log('Button clicked, starting checkout...'); // 
    try {
      // Send a request to your server to create the Checkout session
      console.log('Sending request to create checkout session...'); // Step 2
    
      const response = await fetch('http://localhost:3001/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          userId: userData._id
        })
      });
  
      if (!response.ok) {
        const responseText = await response.text();
        console.error('Server response:', responseText);
        throw new Error('Error creating checkout session');
      }
  
      const session = await response.json();
      if (session && session.id) {
          console.log('Received session from server, redirecting to checkout...');
          const stripe = await stripePromise;
          const { error } = await stripe.redirectToCheckout({
              sessionId: session.id
          });
          if (error) {
              console.error('Error redirecting to checkout:', error);
          }
      } else {
          console.error('No session ID received from server');
      }
    } catch (err) {
      console.error('Error during checkout:', err);
    }
  };
  
      

  if (loading || updating) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (!userData) {
    return <div>No user data found</div>;
  }

  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get('session_id');

  console.log(sessionId); // Logs the session_id



  return (
    <div style={{ margin: '20px' }}>
      <h1>My Profile</h1>
      <p>Name: {userData.firstName} {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Subscription Status: {userData.isSubscribed ? 'Subscribed' : 'Not Subscribed'}</p>
   
      <h2>Subscription Details</h2>
      <p>Price: $9.99 per month</p>
      <p>Benefits: Access to AI Personal Trainer for fitness guidance, exercise tips, diet advice, and more.</p>
      
      <button onClick={handleCheckout}>
        {userData.isSubscribed ? 'Unsubscribe' : 'Purchase Subscription'}
      </button>
    </div>
  );
};

export default MyProfile;


