import React from 'react';
// Routers
import { NavLink } from 'react-router-dom';
// Styles
import styles from './Header.module.scss';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faGlobe, faPlane } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
      <li>
          <NavLink activeClassName={styles.active} className={styles.link} to="/" end>
            <FontAwesomeIcon icon={faHome} size="xs" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} className={styles.link} to="people">
            <FontAwesomeIcon icon={faUser} size="xs" />
            <span>Personagens</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} className={styles.link} to="planets">
            <FontAwesomeIcon icon={faGlobe} size="xs" />
            <span>Planetas</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} className={styles.link} to="starships">
            <FontAwesomeIcon icon={faPlane} size="xs" />
            <span>Aeronaves</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
