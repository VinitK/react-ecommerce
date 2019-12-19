import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({ title, subtitle, size, imageUrl }) => (
    <div className={`menu-item ${size}`} >
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="content">
            <h2 className='title'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
        </div>
    </div>
)

export default MenuItem;