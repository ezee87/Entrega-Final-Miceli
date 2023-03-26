import Item from '../Item/Item';
import React from 'react';

const ItemList = ({ data = [] }) => {
    return (
        data.map(product => <Item key={product.id} info={product} />)
    );
}

export default ItemList;