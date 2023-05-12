import React from 'react'
import Header from '../Header/Header'
import EverythingLocal from '../../Content/EverethingLocalSection/EverythingLocal';
import LatestBenefits from '../../Content/LatestBenefits/LatestBenefits';
import PictureSection from '../../Content/pictureSection/pictureSection';
import NavigationSection from '../../Content/NavigationSection/NavigationSection';
import SubscribeSection from '../../Content/SubscribeSection/SubscribeSection';
import GettingStartedSection from '../../Content/GettingStartedSection/GettingStartedSection';
import UsersSection from '../../Content/UsersSection/UsersSection';
import Footer from '../Footer/FooterDesktop/Footer';

function Home() {
    return (
        <>
            <Header />

            <EverythingLocal />

            <LatestBenefits />

            <PictureSection />

            <NavigationSection />

            <SubscribeSection />

            <GettingStartedSection />

            <UsersSection />

            <Footer />
        </>
    )
}

export default Home;
