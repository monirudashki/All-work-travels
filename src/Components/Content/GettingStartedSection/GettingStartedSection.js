import React from 'react';

import styles from './styles/gettingStartedSection.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHands, faToolbox } from '@fortawesome/free-solid-svg-icons';

const usersIcon = <FontAwesomeIcon icon={faUsers} />
const handsIcon = <FontAwesomeIcon icon={faHands} />
const toolBoxIcon = <FontAwesomeIcon icon={faToolbox} />

function GettingStartedSection() {
    return (
        <section className={styles['section-container']}>
            <h2>Getting Started with Local Reach</h2>

            <div className={styles['article-wrapper']}>
                <article className={styles['article']}>
                    <h3>Community</h3>
                    <div className={styles['hexagon']}>
                        <div className={styles['hexagon-inner']}>
                            <span>{usersIcon}</span>
                        </div>
                    </div>
                    <p>Speak with our specialized advisors on planning tips and resources
                        for early childhood development. Give your child the best opportunities.</p>
                </article>

                <article className={styles['article']}>
                    <h3>Get Involved</h3>
                    <div className={styles['hexagon']}>
                        <div className={styles['hexagon-inner']}>
                            <span>{handsIcon}</span>
                        </div>
                    </div>
                    <p>Get exclusive access to benefits only offered to E-Parents Online members.
                        Sign up for an account today to gain access.</p>
                </article>

                <article className={styles['article']}>
                    <h3>Tools</h3>
                    <div className={styles['hexagon']}>
                        <div className={styles['hexagon-inner']}>
                            <span>{toolBoxIcon}</span>
                        </div>
                    </div>
                    <p>By joining us at E-Parents Online, you'll gain the abilities
                        to use special tools to monitor your child's progression</p>
                </article>
            </div>
        </section>
    )
}

export default GettingStartedSection
