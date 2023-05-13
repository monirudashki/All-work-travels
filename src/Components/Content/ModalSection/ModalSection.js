import React from 'react';

import styles from './styles/modalSection.module.css';

function ModalSection({
    modalToggle
}) {

    const onCloseModalHandle = () => {
        modalToggle(false);
    }

    return (
        <section className={styles['modal-section']}>
            <div className={styles['modal']}>
                <h2>Subscribe to our premium content</h2>

                <form>
                    <input type="text" name="email" />
                    <input type="text" name="password" />

                    <button type='button' onClick={onCloseModalHandle}>SEND</button>
                </form>
            </div>
        </section>
    )
}

export default ModalSection
