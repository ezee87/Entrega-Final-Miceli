import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    
    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Ir a la tienda</Link>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p className="fs-4 fw-semibold">TOTAL: ${totalPrice()}</p>

            <button className="btn btn-danger mb-4"><Link to='/ContactForm'>Finalizar Compra</Link></button>
        </>
    )
}
export default Cart