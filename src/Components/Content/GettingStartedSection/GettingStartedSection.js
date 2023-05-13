import React, { memo } from 'react';

import styles from './styles/gettingStartedSection.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHands, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { gettingStartedArticles } from '../../../mock/gettingStartedArticles';
import GettingStartedArticle from '../../Shared/GettingStartedArticle/GettingStartedArticle';

const usersIcon = <FontAwesomeIcon icon={faUsers} />
const handsIcon = <FontAwesomeIcon icon={faHands} />
const toolBoxIcon = <FontAwesomeIcon icon={faToolbox} />

function GettingStartedSection() {
    return (
        <section className={styles['section-container']}>
            <h2>Getting Started with Local Reach</h2>

            <div className={styles['article-wrapper']}>
                {gettingStartedArticles.map(article => <GettingStartedArticle key={article.title}
                    article={article}
                />)}
            </div>
        </section>
    )
}

export default memo(GettingStartedSection);
