import React from 'react';
import './ItemCart.css';
import { useCartContext } from '../../Context/CartContext/CartContext';

const ItemCart = ({ product }) => {

    const {removeProduct} = useCartContext();

    return (
        <div className='itemcart border border-warning-subtle'>
            <div className = "px-2 py-2">
            <img src={product.image} alt={product.title} />
            </div>
            <div className = "text-start py-2 px-2">
                <p className = "fw-semibold">{product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price}</p>
                <p>SubTotal: {product.quantity * product.price}</p>
                <button className="btn btn-outline-danger" onClick={()=>removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;