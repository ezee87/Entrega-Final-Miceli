import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext/CartContext';
import React, { useState } from 'react';

export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className='detail_image' src={data.image} alt="" />
                <div className="content">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    {
                        goToCart
                            ? <div><button className="btn btn-danger mx-2"><Link to='/cart'>Terminar compra </Link></button>
                                <button className="btn btn-danger mx-2"> <Link to='/'>Seguir comprando</Link></button></div>
                            : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />

                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;