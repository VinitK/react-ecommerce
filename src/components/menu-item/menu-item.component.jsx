import React from 'react';
import './menu-item.styles.scss'

import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, subtitle, size, imageUrl, linkUrl, history, match }) => {
    console.log(history)
    console.log(match)
    return (
        <div className={size ? `menu-item ${size}` : "menu-item"} onClick={() => history.push(`${match.url}${linkUrl}`)} >
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="content">
                <h2 className='title'>{title}</h2>
                <p className='subtitle'>{subtitle}</p>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);