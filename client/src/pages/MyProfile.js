import React, { useEffect, useState, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { fetchUserProfile } from '../utils/queries';
import { UPDATE_USER_SUBSCRIPTION, UPDATE_USER_STRIPE_ID } from '../utils/mutations';
import { loadStripe } from '@stripe/stripe-js';
import AuthService from '../utils/auth';

const stripePromise = loadStripe('pk_live_51NFRHWBy17P1QCFTyHfvu6cpVrtMcQzXrKnjQeluNbQvqbwEbIPaJKl7l5OjMkZSbLWQXuv1if04W18Ytb3XK8YC00cnVM5L57');

const MyProfile = () => {
  const { loading, data, refetch } = useQuery(fetchUserProfile);
  const [updateUserSubscription] = useMutation(UPDATE_USER_SUBSCRIPTION);
  const [updateUserStripeId] = useMutation(UPDATE_USER_STRIPE_ID);
  const [hasUpdated, setHasUpdated] = useState(false);

  useEffect(() => {
    if (data) {
      // console.log("Fetched user data:", data);
    }
  }, [data]);

  const customStyle = {
    fontFamily: "'Courier New', Courier, monospace",
    fontWeight: 'bold',
    fontSize: '1.2em', // You can adjust the size as needed
  };

  const [stripeBillingUrl, setStripeBillingUrl] = useState('https://billing.stripe.com/p/login/aEU5nO9L92b669a144');

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    try {
      const sessionResponse = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AuthService.getToken()}` // Include the token here
        },
      });
      const session = await sessionResponse.json();
  
      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (error) {
        console.error('Stripe checkout error:', error);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };
  
  

  const handleSubscriptionUpdate = useCallback(async () => {
    if (data?.fetchUserProfile) {
      try {
        const response = await updateUserSubscription ({
          variables: { userId: data.fetchUserProfile._id, isSubscribed: !data.fetchUserProfile.isSubscribed,  },
        });
        // console.log('Subscription status updated:', response.data.updateUserSubscription);
        refetch();
      } catch (error) {
        console.error('Error updating subscription:', error);
      }
    }
  }, [data, updateUserSubscription, refetch]);

  const hanldeCustomerUpdate = useCallback(async (stripeCustomerId) => {
    if (data?.fetchUserProfile) {
      try {
        const response = await updateUserStripeId({
          variables: { userId: data.fetchUserProfile._id, stripeCustomerId },
        });
        // console.log('Stripe customer ID updated:', response.data.updateUserStripeId);
        refetch();
      } catch (error) {
        console.error('Error updating Stripe customer ID:', error);
      }
    }
  }, [data, updateUserStripeId, refetch]);


  const handleManageSubscription = () => {
    window.location.href = stripeBillingUrl; // Redirects user to the Stripe billing portal
  };

  


  const handleUnsubscribe = async () => {
    const stripeCustomerId = data?.fetchUserProfile?.stripeCustomerId;
    const authToken = localStorage.getItem('id_token');
  
    
  
    try {
      const response = await fetch('https://www.balancedblueprint.ca/cancel-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({ stripeCustomerId })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      // console.log('Unsubscribed successfully:', responseData);
      // console.log(`Handling unsubscription for user: ${data?.fetchUserProfile?._id}`);
      // Refetch the user profile after a successful unsubscribe operation
      refetch();
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('checkout') === 'success' && !hasUpdated) {
      handleSubscriptionUpdate();
      setHasUpdated(true);
    }
  }, [handleSubscriptionUpdate, hasUpdated]);

 

  if (loading) return <div>Loading...</div>;
  if (!data?.fetchUserProfile) return <div>No user data found</div>;

  const { firstName, lastName, email, isSubscribed, stripeCustomerId } = data.fetchUserProfile;


  return (
    <div style={{ margin: '20px', ...customStyle }}>
      <h1>My Profile</h1>
      <p>Name: {firstName} {lastName}</p>
      <p>Email: {email}</p>
      <p>Subscription Status: {isSubscribed ? 'Subscribed' : 'Not Subscribed'}</p>
      <p>Stripe Customer ID: {stripeCustomerId || 'Not Available'}</p>
      
      <h2>Subscription Details</h2>
      <p>Price: $9.99 per month</p>
      <p>Benefits: Access to the worlds most advanced AI fitness trainer, has the ability to assist in counting macros of your meal, creating diet plans with desired Macronutrient requirements,
        and has the ability to create workout plans with desired muscle groups and workout intensity.</p>
      

     {/* Conditional rendering of the buttons based on subscription status */}
     {isSubscribed && (
        <>
          {/* <button onClick={handleUnsubscribe}>Unsubscribe</button> */}
          <button onClick={handleManageSubscription}>Manage Subscription</button>
        </>
      )}
      {!isSubscribed && (
        <button onClick={handleCheckout}>Purchase Subscription</button>
      )}
    </div>
  );
};

export default MyProfile;
