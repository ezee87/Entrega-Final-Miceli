import './Item.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ info }) => {

    return (
        <Link to={`/item/${info.id}`} className="item">
            <img src={info.image} alt="" />
            <p className="fw-semibold fs-6">{info.title}</p>
        </Link>
    );
}

export default Item;