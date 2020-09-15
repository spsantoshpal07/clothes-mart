import React from 'react';

import ListShopItems from '../components/ListShopItems';

import '../css/ShopItems.scss';

const ShopItems = ({ id, title, items, routeName }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                { items.filter((item, index) => index<4)
                    .map(({id, ...otherShopItemList}) => <ListShopItems key={id} { ...otherShopItemList }/>)}
            </div>
        </div>
    )
}

export default ShopItems;