import styled from 'styled-components';  

export const Overflow = styled.div`
    overflow: auto;

    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #ccc; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #29B573; 
    }
`;

export const ContainerLeft = styled.div`

    grid-row: 1/2;
    display: flex;
    align-items: center;
    justify-content: initial;
    padding-left: 16px;

    div {
        flex-direction: row;
        margin-left: 15px;

        p {
            color: #C4C4C4;
        }

        strong {
            color: grey;
        }
    }
  
`;

export const ContainerCenter = styled.div`

    grid-row: 1/2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C4C4C4;
`;

export const ContainerRight = styled.div`

    grid-row: 1/2;
    display: flex;
    justify-content: space-between;
    padding-right: 16px;

    a {
        font-size: 16px;
    };

    strong {
        color: red;
    }
`;

export const MoveList = styled.ul`

    display: flex;
    flex-direction: column;
    max-height: 360px;

    li {
        height: 70px;
        list-style: none;
        background-color: #F8F9F8;
        width: 100%;
        margin-top: 10px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        display: grid;
        grid-template-columns: 3fr 3fr 3fr;
        align-items: center;
        justify-content: center;
    }

    li:first-child {
        margin-top: 0px;
    }

    @media( max-width: 700px ) {

        li {
            height: 100px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            padding:  0px 16px;

            ${ ContainerLeft } {

                grid-row: 1/2;
                grid-column: 1/2;
                display: flex;
                align-items: center;
                justify-content: initial;
                padding: 0px;
                height: 100%;

                div {
                    flex-direction: column;
                    margin-left: 15px;

                    p {
                        color: #C4C4C4;
                    }

                    strong {
                        color: grey;
                    }
                }
            };

            ${ ContainerCenter } {

                grid-row: 2/3;
                grid-column: 1/2;
                align-items: center;
                justify-content: initial;
                height: 100%;

            }

            ${ ContainerRight } {

                grid-row: 1/3;
                grid-column: 2/3;
                flex-direction: column-reverse;
                align-items: flex-end;
                justify-content: space-between;
                padding: 0px;
                height: 100%;

                a {
                    text-align: right;
                    font-size: 27px;
                };

                strong {
                    text-align: right;
                }
            }
        }    
    }
`;

