import React, { memo } from 'react';
import styles from './styles/header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const menu = <FontAwesomeIcon icon={faBars} />
const errorLeft = <FontAwesomeIcon icon={faChevronLeft} />
const errorRight = <FontAwesomeIcon icon={faChevronRight} />

function Header({
    hamburgerNavToggle,
    HamNavIsClickedHandle
}) {

    const onClickMenuHandle = () => {
        HamNavIsClickedHandle();
        hamburgerNavToggle(true);
    }

    return (
        <header className={styles['header']}>

            <nav className={styles['responsive-navbar']}>
                <div>
                    <p>All Work Travel</p>
                    <button type='button' onClick={onClickMenuHandle}>{menu}</button>
                </div>
            </nav>

            <nav className={styles['navbar']}>
                <div>
                    <p>All Work Travel</p>
                    <button type='button' onClick={onClickMenuHandle}>{menu}</button>
                </div>
            </nav>

            <div className={styles['arrow-left']}>
                {errorLeft}
            </div>

            <div className={styles['arrow-right']}>
                {errorRight}
            </div>

            <div className={styles['title-container']}>
                <h1>Find Expert Saving Tips & Resources With Us</h1>
                <p>The quick brown fox...</p>

                <div className={styles['buttons-wrapper']}>
                    <button type='button'></button>
                    <button type='button'></button>
                    <button type='button'></button>
                </div>
            </div>
        </header>
    )
}

export default memo(Header)
