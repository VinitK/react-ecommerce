import React from 'react';
import './directory-menu.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class DirectoryMenu extends React.Component {

    render() {
        return (
            <div className='directory-menu'>
                {this.props.categoriesPreview.map(({ id, ...otherPartOfProps }) => (
                    <MenuItem key={id} {...otherPartOfProps} />
                ))}
            </div>
        )
    }
}

export default DirectoryMenu;