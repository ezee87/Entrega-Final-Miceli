import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', detalleId);
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [detalleId])

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="row d-flex justify-content-center text-center my-3">
                    <ItemDetail data={data} />
                </div>
            </div>

        </>
    );
}

export default ItemDetailContainer;