import styled from "styled-components";

export const Container = styled.button`
    
    padding: 12px 24px;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
    border: none;
    border-radius: 8px;

    cursor: pointer;

    transition: filter 0.3s ease-in;

    :hover {
        filter: opacity(0.7);
}
`;