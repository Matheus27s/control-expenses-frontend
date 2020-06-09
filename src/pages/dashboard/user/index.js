import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

//API
import api from '../../../services/api';

//Context
import { useAuth } from '../../../context/auth';

//Components:
import Header from '../../../components/form/header'
import Input from '../../../components/form/inputs/text';
import ButtonDefault from '../../../components/buttons';
import Upload from '../../../components/form/inputs/uploads';

import { MoveContainer, MoveForm } from './style';

export default function User() {

    const { user, signIn } = useAuth();
    const formRef = useRef(null);

    const initialData = {
        name: user.name,
        login: user.login,
        password: user.password,
    }

    async function editUser(data) {

        try {

            const schema = Yup.object().shape({
                dateMonth: Yup.date().typeError("Campo nulo."),
                id:        Yup.number().typeError("Campo nulo."),
                recipes:   Yup.array().typeError("Campo nulo."),
                name:      Yup.string().typeError("Campo nulo."),
                login:     Yup.string().typeError("Campo nulo."),
                password:  Yup.string().typeError("Campo nulo."),
            });

            await schema.validate(data, {
                abortEarly: false
            });
            
            formRef.current.setErrors({});

            const response = await api.put('users', {
                id:       user.id,
                recipes:  user.recipes,
                name:     data.name,
                login:    data.login,
                password: data.password,
                profile:  data.profile,
            })
    
            signIn(response.data.login);

        } catch( err ) {

            console.log("Erro ao tentar atualizar o usuário.")

            if( err instanceof Yup.ValidationError ) {
                const errorMessages = {};
                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessages);
            }

        }
    }

    return(
        <MoveContainer>

            <Header title="Editar usuário"/>
            
            <MoveForm> 

            <Form ref={ formRef } initialData={ initialData } onSubmit={ editUser }> 

                <Upload 
                    name="profile"
                />
                
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

                <ButtonDefault type="submit">Alterar</ButtonDefault>

            </Form>
        </MoveForm>

        </MoveContainer>

    );

}
