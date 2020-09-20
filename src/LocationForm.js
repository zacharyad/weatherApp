import React from 'react';
import styles from './styles';
import TextInput from './TextInput';

function LocationForm() {
  return (
    <div style={styles.locationForm.wrapper}>
      <div>
        <h1>Find a Forecast!</h1>
        <form>
          <TextInput label="location" placeholder="Houston">
            Location
          </TextInput>
          <button type="button">Get Weather</button>
        </form>
      </div>
    </div>
  );
}

export default LocationForm;
