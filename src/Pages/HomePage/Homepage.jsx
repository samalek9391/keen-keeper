import React from 'react';
import Banner from '../../Components/HomePage/Banner';
import Count from '../../Components/HomePage/Count';
import AllFriends from '../../Components/HomePage/AllFriends';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Count/>
            <AllFriends/>
        </div>
    );
};

export default Homepage;