import styled from 'styled-components';

export const ContainerLeftWeb = styled.div`

    display: flex;
    flex-direction: column;
    border-right: 2px solid #29B573;
    flex: 2;

    p {
        font-size: 24px;
        font-weight: bold;
        color: #FFF;
    };

`;

export const ContainerLeftMobile = styled.div`

    display: none;
    flex-direction: column;
    border: none;
    flex: 2;
    padding: 16px;

    p {
        font-size: 12px;
        font-weight: bold;
        color: #FFF;
        padding: 16px;
    };

`;

export const ContainerRight = styled.div`

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

    animation: show-login 1s ease-in-out forwards;
    display: flex;
    flex-direction: column;
    flex: 2;

    h2 {
        text-align: center;
        font-size: 24px;
        color: #29B573;
        margin-bottom: 16px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
        padding-left: 16px;     
    }
`;

export const ContainerOption = styled.div`

    display: flex;
    flex-direction: row;
    width: 50%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

    p {
        color: #29B573;
        font-weight: bold;
        padding-left: 16px;
    }

    a {
        color: #29B573;
        text-decoration: none;
        font-size: 24px;
        font-weight: bold
    }
`;

export const ContainerRegister = styled.div`

  display: flex;
  justify-content: space-between; 
  align-items: center;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;/* cobre a altura toda do corpo*/
  background-color: #48887B;
  padding: 16px;


/*Media Query */
@media ( max-width: 760px )  {

    flex-direction: column;
    align-items: center;
    justify-content: end; 

    ${ ContainerLeftWeb } {
        display: none
    };

    ${ ContainerLeftMobile } {
        display: flex
    };

    ${ ContainerRight } {

        width: 100%;
        flex: 4;

        h2 {
            margin-bottom: 8px;
        }

        form {
            width: 100%;
            padding-left: 0;
        }
    };

        ${ ContainerOption } {
            width: 100%;

            p {
                padding-left: 0px;
            }
        }
    }

`;



