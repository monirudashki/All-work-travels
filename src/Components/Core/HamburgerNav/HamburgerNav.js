import React from 'react';

import styles from './styles/hamburgerNav.module.css';

import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const close = <FontAwesomeIcon icon={faXmark} />

function HamburgerNav({
    hamburgerNavToggle,
    hamburgerNavOn
}) {

    const onClickCloseHandle = () => {
        hamburgerNavToggle(false);
    }

    return (
        <section className={`${styles['hamburgerNav-section']} 
        ${hamburgerNavOn ? styles['slide-in'] : styles['slide-out']}`}>
            <nav className={styles['navbar']}>
                <div>
                    <p>All Work Travel</p>
                    <button type='button' onClick={onClickCloseHandle}>{close}</button>
                </div>
            </nav>

            <div className={styles['content']}>
                <nav>
                    <h2>HOME</h2>
                    <Link>Category</Link>
                    <Link>Category</Link>
                    <Link>Category</Link>
                </nav>

                <div>
                    <button type='button'>REGISTER</button>
                    <button type='button'>LOGIN</button>
                </div>
            </div>
        </section>
    )
}

export default HamburgerNav;
