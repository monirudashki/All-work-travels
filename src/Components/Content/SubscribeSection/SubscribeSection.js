import React from 'react';

import styles from './styles/subscribeSection.module.css';

import subscribeImg from './images/smsSubscribe.png'

function SubscribeSection() {
    return (
        <section className={styles['subscribeSection-container']}>
            <div className={styles['content']}>
                <div className={styles['content__img-wrapper']}>
                    <img src={subscribeImg} alt="subscribe" />
                </div>

                <div className={styles['content__subscribe']}>
                    <h2>SMS SUBSCRIBE</h2>
                    <p>The quick brown fox...</p>
                    <button type='button'>POP UP</button>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection
