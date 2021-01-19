import React from 'react'
import styles from './Header.module.scss'
import Button from '../Button/Button'

const Header = ({ toggleForm }) => (
    <div className={styles.wrapper}>
        <div className={styles.wrapperMain}>
            <div className={styles.logo}>ThermoPlan</div>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        <a className={styles.navItemLink} href="#">Obiady</a>
                    </li>
                    <li className={styles.navItem}>
                        <a className={styles.navItemLink} href="#">Desery</a>
                    </li>
                    <li className={styles.navItem}>
                        <a className={styles.navItemLink} href="#">Kolacje</a>
                    </li>
                </ul>
            </nav>
            <Button onClick={() => toggleForm()}>Dodaj danie</Button>
        </div></div>

);

export default Header;