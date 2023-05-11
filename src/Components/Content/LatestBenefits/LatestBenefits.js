import React from 'react';
import styles from '../LatestBenefits/styles/latestBenefits.module.css';

import img1 from './images/lastBenefitsImage1.png';
import img2 from './images/lastBenefitsImage2.png';
import img3 from './images/lastBenefitsImage3.png';

function LatestBenefits() {
    return (
        <section className={styles['latest-benefits-section']}>
            <div className={styles['header']}>
                <h3>Latest Benefits</h3>

                <p className={styles['header-desc']}>From: <span>Business</span></p>
            </div>

            <p className={styles['header-resp-desc']}>From: <span>Business</span></p>

            <div className={styles['cards-wrapper']}>
                <article className={styles['card']}>
                    <div className={styles['card__img-wrapper']}>
                        <img src={img1} alt="first" />
                    </div>

                    <div className={styles['card__desc']}>
                        <p>Category: name</p>
                        <h4>The quick brown fox...</h4>

                        <button type='button'>Read article</button>
                    </div>
                </article>

                <article className={styles['card']}>
                    <div className={styles['card__img-wrapper']}>
                        <img src={img2} alt="first" />
                    </div>

                    <div className={styles['card__desc']}>
                        <p>Category: name</p>
                        <h4>The quick brown fox...</h4>

                        <button type='button'>Read article</button>
                    </div>

                </article>

                <article className={styles['card']}>
                    <div className={styles['card__img-wrapper']}>
                        <img src={img3} alt="first" />
                    </div>

                    <div className={styles['card__desc']}>
                        <p>Category: name</p>
                        <h4>The quick brown fox...</h4>

                        <button type='button'>Read article</button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default LatestBenefits;
