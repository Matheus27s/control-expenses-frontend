import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import api from '../../services/api';

//Components:
import ButtonDefault from '../../components/buttons';
import Input from '../../components/form/inputs/text';

import { ContainerRegister, ContainerLeftWeb, ContainerLeftMobile, ContainerRight, ContainerOption } from './style';
import logo from '../../img/logo.svg';
import logoSingle from '../../img/logo-single.svg';

export default function Register({ history }) {

    const formRef = useRef(null);

    async function registerUser(data) {

        await api.post('users', {
            name: data.name,
            login: data.login,
            password: data.password,
            profile: data.profile 
        });

        history.push('/');
    }

    return (
        
        <ContainerRegister>

            <ContainerLeftWeb>
                <img src={ logo } alt="logo"/>
                <p>Sistema que irá auxiliar no controle dos seus gastos.</p>
            </ContainerLeftWeb>

            <ContainerLeftMobile>
                <img src={ logoSingle } alt="logo"/>
                <p>Sistema que irá auxiliar no controle dos seus gastos.</p>
            </ContainerLeftMobile>

            <ContainerRight>
            <Form ref={formRef} onSubmit={registerUser}>

                <h2>Cadastro</h2>

                <Input 
                    type="text"
                    name="name"
                />

                <Input 
                    type="text"
                    name="login"
                />

                <Input 
                    type="password"
                    name="password"
                />

                <ButtonDefault>Cadastro</ButtonDefault>

            </Form>

            <ContainerOption>
                <p>Login</p>
                <Link to="/" >{ '<' }</Link>
            </ContainerOption>

            </ContainerRight>
        </ContainerRegister>
    );
}