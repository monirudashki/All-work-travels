import React from 'react'
import Header from '../Header/Header'
import EverythingLocal from '../../Content/EverethingLocalSection/EverythingLocal';
import LatestBenefits from '../../Content/LatestBenefits/LatestBenefits';
import PictureSection from '../../Content/pictureSection/pictureSection';
import NavigationSection from '../../Content/NavigationSection/NavigationSection';
import SubscribeSection from '../../Content/SubscribeSection/SubscribeSection';

function Home() {
    return (
        <>
            <Header />

            <EverythingLocal />

            <LatestBenefits />

            <PictureSection />

            <NavigationSection />

            <SubscribeSection />
        </>
    )
}

export default Home;
