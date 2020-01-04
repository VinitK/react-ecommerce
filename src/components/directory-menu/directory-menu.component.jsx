import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectoryCategories } from '../../redux/directory/directory.selectors'

import './directory-menu.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const DirectoryMenu = ({ categories }) => {

    return (
        <div className='directory-menu'>
            {categories.map(({ id, ...otherPartOfProps }) => (
                <MenuItem key={id} {...otherPartOfProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    categories: selectDirectoryCategories
})

export default connect(mapStateToProps)(DirectoryMenu);