import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  
    // Decode the token to get the user's profile and save it to localStorage
    const profile = decode(idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
  
    window.location.assign('/');
  }

  getProfile() {
    // Retrieves the user profile from localStorage
    return JSON.parse(localStorage.getItem('profile'));
  }
  

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
  
}

export default new AuthService();
