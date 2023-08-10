import { useState, useEffect } from "react";

import { Container, ProductImage, ProductInfo, IngredientsOrganizer } from "./style";

import { BackButton } from "../../backButton";

import { useParams } from "react-router-dom";
import { api } from "../../../services/api";

export function Dish() {

    const params = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchPlate() {
            const response = await api.get(`/pratos/${params.id}`);
            setData(response.data);
        }
        fetchPlate();
    },[]);

    return (
        <Container>
            <BackButton />
            {
                data &&
                <main>
                    <ProductImage>
                        <img width={ 264 } height={ 264 } src="../../../../assets/product.png" alt="Foto do produto" />
                    </ProductImage>
                    <ProductInfo>
                        <h2>{data.dish.name}</h2>
                        <p>{data.dish.description}</p>
                        {
                            data.tags && 
                        <IngredientsOrganizer>
                            {
                                data.tags.map(tags => (
                                        <span 
                                        key={String(tags.id)}>
                                            {tags.title}
                                        </span>
                                ))
                            }
                        </IngredientsOrganizer>
                        }
                    </ProductInfo>
                </main>
            }
        </Container>
    )
}