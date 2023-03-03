import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Title from '../Title/Title';
import { useParams } from 'react-router-dom';

const films = [
    { id: 1, image: "https://i.ibb.co/kGv69kN/producto1.png", category: "DosPartes", title: "Oreo" },
    { id: 2, image: "https://i.ibb.co/T27vw6c/producto2.png", category: "CuatroPartes", title: "Pokeball" },
    { id: 3, image: "https://i.ibb.co/mcv6TfW/producto3.png", category: "CuatroPartes", title: "Herakles" },
];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 1000);
        });
        if (categoryId) {
            getData.then(res => setData(res.filter(film => film.category === categoryId)));
        } else {
            getData.then(res => setData(res));
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