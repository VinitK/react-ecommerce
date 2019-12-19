import React from 'react';
import './directory-menu.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class DirectoryMenu extends React.Component {

    render() {
        return (
            <div className='directory-menu'>
                {this.props.categoriesPreview.map(({ id, title, subtitle, size, imageUrl }) => (
                    <MenuItem key={id} title={title} subtitle={subtitle} size={size} imageUrl={imageUrl} />
                ))}
            </div>
        )
    }
}

// const DirectoryMenu = props => (
//     <div className='directory-menu'>
//         {this.props.map(category => (
//             <div className='menu-item' >
//                 <Content key={category.id} title={category.title} subtitle={category.subtitle} size={category.size} />
//             </div>
//         ))}
//     </div >
// )

export default DirectoryMenu;