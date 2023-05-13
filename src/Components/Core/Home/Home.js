import React, { useCallback, useState } from 'react'
import Header from '../Header/Header'
import EverythingLocal from '../../Content/EverethingLocalSection/EverythingLocal';
import LatestBenefits from '../../Content/LatestBenefits/LatestBenefits';
import PictureSection from '../../Content/pictureSection/pictureSection';
import NavigationSection from '../../Content/NavigationSection/NavigationSection';
import SubscribeSection from '../../Content/SubscribeSection/SubscribeSection';
import GettingStartedSection from '../../Content/GettingStartedSection/GettingStartedSection';
import UsersSection from '../../Content/UsersSection/UsersSection';
import Footer from '../Footer/FooterDesktop/Footer';
import HamburgerNav from '../HamburgerNav/HamburgerNav';
import ModalSection from '../../Content/ModalSection/ModalSection';

function Home() {

    const [hamburgerNavOn, setHamburgerNavOn] = useState(false);

    const hamburgerNavToggle = useCallback((boolean) => {
        setHamburgerNavOn(boolean);
    }, []);

    const [modalOn, setModalOn] = useState(false);

    const modalToggle = useCallback((boolean) => {
        setModalOn(boolean);
    }, []);

    return (
        <>
            <Header hamburgerNavToggle={hamburgerNavToggle} />

            <HamburgerNav hamburgerNavToggle={hamburgerNavToggle} hamburgerNavOn={hamburgerNavOn} />

            <EverythingLocal />

            <LatestBenefits />

            <PictureSection />

            <NavigationSection />

            <SubscribeSection modalToggle={modalToggle} />

            {modalOn &&
                <ModalSection modalToggle={modalToggle} />
            }

            <GettingStartedSection />

            <UsersSection />

            <Footer />
        </>
    )
}

export default Home;
