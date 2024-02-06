import React, { useEffect, useState } from "react";
import CardComp from "./Commonnav/CardComp";

function Apicallcomp() {

    const [pro, setpro] = useState([])

    useEffect(() => {
        handleapi()
        return () => {
            handleapi()
        };
    }, []);

    const handleapi = async () => {

        const response = await fetch("https://fakestoreapi.com/products")

        const data = await response.json()

        setpro(data)

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                {pro.filter((tod) => tod.price > 100).map((todo, i) => (
                <div key={i} className="col-4 mt-4">
                  <CardComp head={todo.title} rate={todo.price} img={todo.image} />
                </div>
            ))}
                </div>
            </div>
        </div>
    )
}

export default Apicallcomp;