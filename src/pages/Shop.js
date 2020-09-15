import React from 'react';
import ShopItems from '../components/ShopItems';

import shopItems from '../data/shop-data';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopItems: shopItems
        }
    }

    render () {
        const { shopItems } = this.state;
        return (
            <div className='shop'>
                {shopItems.map(({ id, ...otherShopsItemsProps }) =>
                    <ShopItems key={id} { ...otherShopsItemsProps } />
                )}
            </div>
        )
    }
}

export default Shop;