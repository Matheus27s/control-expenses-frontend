import styled from 'styled-components';

export const ContainerControl = styled.div`
    background-color: #F8F9F8;
    display: grid;
    grid-template-rows: 10fr 40fr 30fr 10fr;
    grid-template-columns: 70fr 30fr;
    gap: 10px;
    margin: 10px;

    @media(max-width: 700px) {
        grid-template-rows: 5fr 40fr 20fr 20fr 5fr;
        grid-template-columns: auto;
    }
`;