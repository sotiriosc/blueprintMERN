import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  const WithTracker = ({ component: Component, ...props }) => {
    useEffect(() => {
      const page = props.location.pathname;
      trackPage(page);
    }, [props.location.pathname]);

    
  return <Component {...props} />;
  };

  return WithTracker;
};

export default withTracker;
