import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';



ReactGA.initialize('G-K50HC7JR3S'); // Replace with your Google Analytics tracking ID
ReactGA.pageview(window.location.pathname + window.location.search);

const tagManagerArgs = {
  gtmId: 'G-K50HC7JR3S'  // Replace with your GTM ID
}

const root = ReactDOM.createRoot(document.getElementById('root'));

TagManager.initialize(tagManagerArgs);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Check if service workers are supported by the browser
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Register the service worker
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed
      console.log('ServiceWorker registration failed: ', err);
    });
  });
} else {
  console.log('Service workers are not supported by this browser.');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
