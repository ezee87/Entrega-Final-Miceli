import React, { useState } from 'react';
import { useCartContext } from '../../Context/CartContext/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const formBase = {
    name: '',
    email: '',
    phone: ''
};

const ContactForm = () => {

    const [form, setForm] = useState(formBase);
    const { cart, totalPrice } = useCartContext();
    const [id, setId] = useState();

    const submitHandler = (ev) => {

        const order = {
            buyer: form,
            items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
            date: Date.now(),
            total: totalPrice(),
        }

        ev.preventDefault();
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then((snapshot) => {
                setForm(formBase);
                setId(snapshot.id);
            });
    };

    const inputChangeHandler = (ev) => {
        const { name, value } = ev.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div>
            <form className="justify-content-center" onSubmit={submitHandler}>

                <div className="mb-3">
                    <label className="col-sm-2 col-form-label" htmlFor="name">Nombre</label>
                    <input
                        name="name"
                        id="name"
                        value={form.name}
                        onChange={inputChangeHandler} />
                </div>

                <div className="mb-3">
                    <label className="col-sm-2 col-form-label" htmlFor="email">Email</label>
                    <input
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={inputChangeHandler} />
                </div>

                <div className="mb-3">
                    <label className="col-sm-2 col-form-label" htmlFor="phone">Celular</label>
                    <input
                        name="phone"
                        id="phone"
                        value={form.phone}
                        onChange={inputChangeHandler} />
                </div>

                <button className="btn btn-danger">Finalizar compra</button>
            </form>

            {
                typeof id !== 'undefined' ? (
                    <p className="fw-semibold fs-6 my-3">Tu orden de compra es la: {id}</p>
                ) : ('')
            }

        </div>
    );
};

export default ContactForm;