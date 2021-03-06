import styled from 'styled-components';

export const MoveContainer = styled.div`
    background-color: #F8F9F8;
    display: grid;
    grid-template-rows: 10fr 80fr;
    gap: 10px;
    margin: 10px;

    @media( max-width: 700px ) {
        grid-template-rows: 10fr 90fr;
        flex: 1;
    }
`;

export const MoveForm = styled.div`
    background-color: #F8F9F8;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.3); 
    border-radius: 12px;
    padding: 16px;

    @keyframes show-login {
        0% {
            transform: translateY(0px);
            opacity: 0.1;        
        }

        25% {
            transform: translateY(-10px);
            opacity: 0.2;
        }
    }
    
    form {
        animation: show-login 1s ease-in-out forwards;
        display: flex;
        flex-direction: column;
        width: 30%;
        margin: 0 auto;     
    }

    @media( max-width: 700px ) {
        form{
            width: 100%;
        }
    }
`;