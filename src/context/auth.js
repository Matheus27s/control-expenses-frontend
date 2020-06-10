import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({ 

    signed: true, 
    user: {},
    signIn: () => {},
    signOut: () => {},
    register: () => {},
    messageErro: '',

});

export const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ statusMenssage, setStatusMenssage ] = useState('');

    useEffect(() => {

        function loadStorageData() {
            
            const storagedUser = localStorage.getItem('@RNAuth:user');
            
            if( storagedUser ){ 
                setUser(JSON.parse(storagedUser));
            }
        }

        setLoading(false);
        loadStorageData();

    },[]);

    async function register( user ) {

        const { data } = await api.post('users/',
            user,
        );

        setStatusMenssage('Usuário salvo com sucesso!');
    }

    async function signIn( login ) {

        const { data } = await api.post('sessions/', {
            login,
        });

        if( data === '' ) {
            setStatusMenssage('Senha ou Login inválido!');
            return Error;
        };

        setStatusMenssage(`Bem vindo ${ data.name }!`);
                
        setUser(data);
        localStorage.setItem('@RNAuth:user', JSON.stringify(data));

    }

    function signOut() {
        localStorage.clear();
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, loading ,user , signIn, signOut,register, statusMenssage, setStatusMenssage }}>
            { children }
        </AuthContext.Provider>
    );

};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}