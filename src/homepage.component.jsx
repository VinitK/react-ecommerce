import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h2 className='title'>MATS</h2>
                    <p className='subtitle'>Mat the floor, make it cloud!</p>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h2 className='title'>BROOMS</h2>
                    <p className='subtitle'>Magic brooms to make you fly!</p>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h2 className='title'>MOPS</h2>
                    <p className='subtitle'>Shine any platform with your mop!</p>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h2 className='title'>TURFS</h2>
                    <p className='subtitle'>Have real looking artificial turfs!</p>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h2 className='title'>BRUSHES</h2>
                    <p className='subtitle'>Every bother, brush it away!</p>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;