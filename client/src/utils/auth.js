import decode from 'jwt-decode';

class AuthService {
  // Retrieves the user token from localStorage
  // Please help degug the issue with Error decoding token: invalid token
  getToken() {
    const token = localStorage.getItem('id_token');
    // console.log('Token retrieved from localStorage:', token);
    return localStorage.getItem('id_token');
  }

  // Saves user token to localStorage and redirects to the home page
  login(idToken) {
    // console.log('Token received during login:', idToken); // Log the token for debugging
    localStorage.setItem('id_token', idToken);

    // Attempt to decode the token and save the user's profile to localStorage
    try {
      const profile = decode(idToken);
      localStorage.setItem('profile', JSON.stringify(profile));
    } catch (err) {
      console.error('Error decoding token:', err);
    }

    window.location.assign('/');
  }

  // Checks if there is a saved token and it's still valid
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Checks if the token has expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }

  // Retrieves the user profile from localStorage
  getProfile() {
    return JSON.parse(localStorage.getItem('profile'));
  }

  // Clears user token and profile data from localStorage
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    window.location.assign('/');
  }
}

export default new AuthService();
