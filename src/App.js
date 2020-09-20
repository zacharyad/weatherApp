import React from 'react';
import Nav from './Nav.js';
import LocationForm from './LocationForm';
import styles from './styles';

function App() {
  return (
    <div style={styles.app.center}>
      <Nav />
      <LocationForm />
    </div>
  );
}

export default App;
