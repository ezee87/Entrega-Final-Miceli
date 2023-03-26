import ItemList from '../ItemList/ItemList';
import Title from '../Title/Title';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

export const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');

        if (categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }

        else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }

    }, [categoryId])

    return (
        <>
            <div className="mt-3">
                <Title contenido="Productos" />
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row d-flex justify-content-center text-center my-3">
                    <ItemList data={data} />
                </div>
            </div>

        </>
    );
}
export default ItemListContainer;