import jwtDecode from 'jwt-decode';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedToken.exp >= currentTime) {
      localStorage.removeItem('token'); // Remove expired token
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

export default isAuthenticated;
