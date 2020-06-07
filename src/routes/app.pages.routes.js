import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Loading from '../components/loading';

import { usePage } from '../context/page';

let Control =   lazy(() => import('../pages/dashboard/control'));
let Move =      lazy(() => import('../pages/dashboard/move'));
let Category =  lazy(() => import('../pages/dashboard/category'));
let Recipe =    lazy(() => import('../pages/dashboard/recipe'));
let User =      lazy(() => import('../pages/dashboard/user'));

const AppPagesRoutes = () => {

    const { page } = usePage();
    
    switch ( page ) {

        case 'page01': return <Suspense fallback={ <Loading /> } ><BrowserRouter><Route component={ Control } /></BrowserRouter></Suspense>
        case 'page02': return <Suspense fallback={ <Loading /> } ><BrowserRouter><Route component={ Recipe } /></BrowserRouter></Suspense>
        case 'page03': return <Suspense fallback={ <Loading /> } ><BrowserRouter><Route component={ Move } /></BrowserRouter></Suspense>
        case 'page04': return <Suspense fallback={ <Loading /> } ><BrowserRouter><Route component={ Category } /></BrowserRouter></Suspense>
        case 'page05': return <Suspense fallback={ <Loading /> } ><BrowserRouter><Route component={ User } /></BrowserRouter></Suspense>
        default      : return <Suspense fallback={ <Loading /> } ><BrowserRouter><Route component={ Control } /></BrowserRouter></Suspense>

    }
};

export default AppPagesRoutes;
