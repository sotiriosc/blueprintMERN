import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER_PROFILE } from '../utils/queries';

const MyProfile = () => {
  const { loading, data } = useQuery(QUERY_USER_PROFILE);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (data) {
      setUserData(data.userProfile);
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
    <div>
      <h1>My Profile</h1>
      <p>Name: {userData.firstName} {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Subscription Status: {userData.isSubscribed ? 'Subscribed' : 'Not Subscribed'}</p>
      {/* Add more user-specific information as needed */}
   
     <h2>Subscription Details</h2>
     <p>Price: $9.99 per month</p>
     <p>Benefits: Access to AI Personal Trainer for fitness guidance, exercise tips, diet advice, and more.</p>
    {/* Add a button or link to manage the subscription */}
  </div>
  );
};

export default MyProfile;
