import './Item.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ info }) => {
    return (
        <Link to={`/item/${info.id}`} className="film">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </Link>
    );
}

export default Item;