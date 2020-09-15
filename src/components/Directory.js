import React from 'react';

import MenuItem from './MenuItem';
import { items } from '../data/directory-data';

import '../css/directory.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            items: items
        }
    }

    render () {
        return (
            <div className='directory-menu'>
                { 
                    this.state.items.map(({id, ...otherItemsProps}) =>
                        <MenuItem key={id} {...otherItemsProps}/>
                    )
                }
            </div>
        )
    }
}

export default Directory;