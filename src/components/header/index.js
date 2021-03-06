import React, { Suspense } from 'react';

//Contexts:
import { useAuth } from '../../context/auth';
import { usePage } from '../../context/page';

import Loading from '../loading';

import { ContainerHeader, ContainerUser } from './style';

import logo from '../../img/logo-single.svg';
import profileDefaut from '../../img/profile-default.png';

import { FiEdit } from 'react-icons/fi';

export default function Header() {

    const { user } = useAuth();
    const { handlePage } = usePage();

    return(     
        <ContainerHeader >
            <img src={ logo } alt="logo"></img>
            
            <ContainerUser>
                <strong>{ user.name }</strong>
                <div>
                    <Suspense fallback={ <Loading /> } >
                        <img src={ atob( user.profile ) ?  atob( user.profile ) : profileDefaut } alt="logo"></img>
                    </Suspense>
                </div>
                <button onClick={() => handlePage('page05')}>
                    <FiEdit size={ 16 } color="#FFF"/>
                </button>
            </ContainerUser>
        </ContainerHeader>
    );
}