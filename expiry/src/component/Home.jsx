import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Homepage!</h1>
      <p style={styles.subtitle}>This is the protected area of the site.</p>
      <p style={styles.content}>
        If you're seeing this, you are successfully authenticated. Enjoy your stay!
      </p>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    padding: '20px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: '24px',
    color: '#666',
    marginTop: '10px',
  },
  content: {
    fontSize: '18px',
    color: '#555',
    marginTop: '20px',
    textAlign: 'center',
    maxWidth: '600px',
  },
};

export default HomePage;
