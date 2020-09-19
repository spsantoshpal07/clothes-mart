import React from 'react';

import ListShopItems from '../components/ListShopItems';

import '../css/ShopItems.scss';

const ShopItems = ({ title, items, routeName }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                { items.filter((item, index) => index<4)
                    .map( item => <ListShopItems key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default ShopItems;