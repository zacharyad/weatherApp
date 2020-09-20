import React from 'react';
import styles from './styles';

function Nav() {
  return (
    <>
      <nav style={styles.nav.navWrapper}>
        <h1 style={styles.nav.logo}>
          <a href="#">LOGO</a>
        </h1>
        <div>
          <ul style={styles.nav.linkWrapper}>
            <li style={styles.nav.li}>
              <a href="#">About the Tech</a>
            </li>
            <li style={styles.nav.li}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
