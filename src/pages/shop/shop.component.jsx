import React from 'react';

import SHOP_DATA from './shop.data';

import './shop.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div className="shop-page">
                <h1 className="page-title">SHOP</h1>
                {
                    this.state.collections.map(({ id, ...otherPartsOfCollection }) => (
                        <CollectionPreview key={id} {...otherPartsOfCollection}></CollectionPreview>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;