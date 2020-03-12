import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title }) => (
    <div className='directory-menu'>
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP HOW</span>
            </div>
        </div>
    </div>
)

export default MenuItem;