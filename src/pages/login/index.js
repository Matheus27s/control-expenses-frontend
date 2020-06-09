import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

//import MyComp from '../../components/newLoader/myComp';

//Contexts:
import { useAuth } from '../../context/auth';

//Components:
import ButtonDefault from '../../components/buttons';
import Input from '../../components/form/inputs/text';

import { ContainerLogin, ContainerRight, ContainerLeftWeb, ContainerLeftMobile, ContainerOption } from './style';
import logo from '../../img/logo.svg';
import logoSingle from '../../img/logo-single.svg';

export default function Login() {

    const { signIn } = useAuth();

    const formRef = useRef(null);

    const loginUser = async (data, { reset }) => {

        try {

            const schema = Yup.object().shape({
                login: Yup.string().required('Campo nulo.'),
                password: Yup.string().required('Campo nulo.'),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            formRef.current.setErrors({});
            signIn(data.login);

            console.log(data)
            console.log('Login com sucesso!!')

        } catch (err) {

            console.log("Erro no login!")

            if( err instanceof Yup.ValidationError ) {
                const errorMessages = {};
                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessages);
            }
        }
    }

    return (
        
        <ContainerLogin>

            <ContainerLeftWeb>
                <img src={ logo } alt="logo"/>
                <p>Sistema que irá auxiliar no controle dos seus gastos.</p>
            </ContainerLeftWeb>

            <ContainerLeftMobile>
                <img src={ logoSingle } alt="logo"/>
                <p>Sistema que irá auxiliar no controle dos seus gastos.</p>
            </ContainerLeftMobile>

            <ContainerRight >
                <Form ref={formRef} onSubmit={ loginUser } >

                    <h2>Login</h2>

                    <Input name="login" type="text" placeholder="Login"/>
                    <Input name="password" type="password" placeholder="Password"/>

                    <ButtonDefault>Login</ButtonDefault>
                </Form>

                <ContainerOption>
                    <p>Registrar-se</p>
                    <Link to="/register" >{ '>' }</Link>
                </ContainerOption>
            </ContainerRight>
        </ContainerLogin>

    );
}