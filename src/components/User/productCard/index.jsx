import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Selector } from "./styles";
import Minus from "../../../assets/minus.svg";
import Plus from "../../../assets/plus.svg";
import Favorite from "../../../assets/favorite.svg";

export function ProductCard({ data, addToCart, cartItems }) {

    const [itemQuantity, setItemQuantity] = useState(0);

    const navigate = useNavigate();

    function handlePlateDetail() {
        navigate(`/pratos/${data.id}`, {state: cartItems});
      }

    const changeQuantity = (e) => {
        if(e === "sum") {
            setItemQuantity(itemQuantity + 1)
        } else if (e === "subtraction" && itemQuantity > 0 ) {
            setItemQuantity(itemQuantity - 1)
        }
    };

    const handleAddToCart = () => {
        addToCart({
            name: data.name,
            quantity: itemQuantity,
        });
    };

    return(
        <Container>
            <div className="plate-infos" onClick={ handlePlateDetail }>
                <img src="src/assets/product.png" alt="Foto do produto" />
                <h5 data={data.name}>{data.name}</h5>
                <p data={data.description}>{data.description}</p>
                <h4 data={data.price}>R${data.price}</h4>
            </div>
            <Selector>
                <button onClick={ () => changeQuantity("subtraction") }> <img src={ Minus } alt="Diminuir quantidade do produto" /> </button>
                <span>{itemQuantity}</span>
                <button onClick={ () => changeQuantity("sum") }> <img src={ Plus } alt="Adicionar produto" /> </button>
                <button onClick={ handleAddToCart }>Incluir</button>
            </Selector>
            <button onClick={ handleAddToCart } >Incluir</button>
            <img src={ Favorite } alt="Adicionar aos favoritos" />

        </Container>
    )
}