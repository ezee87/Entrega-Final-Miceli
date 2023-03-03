import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const films = [
    { id: 1, image: "https://i.ibb.co/kGv69kN/producto1.png", category: "DosPartes", title: "Oreo" },
    { id: 2, image: "https://i.ibb.co/T27vw6c/producto2.png", category: "CuatroPartes", title: "Pokeball" },
    { id: 3, image: "https://i.ibb.co/mcv6TfW/producto3.png", category: "CuatroPartes", title: "Herakles" },
];

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        });

        getData.then(res => setData(res.find(film => film.id === parseInt(id))));
    }, [])

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