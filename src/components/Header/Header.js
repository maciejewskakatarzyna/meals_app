import React from 'react'
import styles from './Header.module.scss'

const Header = () => (
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
            <button className={styles.button}>Dodaj nowe danie</button>
        </div></div>

);

export default Header;