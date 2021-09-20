import React from 'react';
import './main-page.scss'
import WebBackground from "../../../assets/images/web-background.svg";
import MobileBackground from "../../../assets/images/mobile-background.svg";


function MainPage() {
    return (
        <div className='all'>
            <img className='web-background' src={WebBackground} alt={'fail'}/>
            <img className='mobile-background' src={MobileBackground} alt={'fail'}/>
        </div>
    )
}

export default MainPage;
