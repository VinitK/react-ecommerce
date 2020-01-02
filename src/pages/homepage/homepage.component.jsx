import React from 'react';
import './homepage.styles.scss';

import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            categories: [
                { id: 1, title: "MATS", subtitle: "Mat the floor, make it cloud!", linkUrl: "mats", imageUrl: "https://cdn.pixabay.com/photo/2015/12/26/05/53/wood-1108307_960_720.jpg" },
                { id: 2, title: "BROOMS", subtitle: "Magic brooms to make you fly!", linkUrl: "brooms", imageUrl: "https://cdn.pixabay.com/photo/2012/03/03/23/06/backdrop-21534_960_720.jpg" },
                { id: 3, title: "MOPS", subtitle: "Shine any platform with your mop!", linkUrl: "mops", imageUrl: "https://cdn.pixabay.com/photo/2017/08/10/02/05/tiles-shapes-2617112_960_720.jpg" },
                { id: 4, title: "TURFS", subtitle: "Have real looking artificial turfs!", linkUrl: "turfs", size: "large", imageUrl: "https://cdn.pixabay.com/photo/2012/03/04/00/17/abstract-21851_960_720.jpg" },
                { id: 5, title: "BRUSHES", subtitle: "Every bother, brush it away!", linkUrl: "brushes", size: "large", imageUrl: "https://cdn.pixabay.com/photo/2013/02/20/11/30/autumn-83761_960_720.jpg" }
            ]
        }
    }

    render() {
        return (
            <div className='home-page'>
                <DirectoryMenu categoriesPreview={this.state.categories} />
            </div>
        )
    }
}

export default HomePage;