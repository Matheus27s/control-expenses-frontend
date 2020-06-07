import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Loading from '../components/loading';

let Login =    lazy(() => import('../pages/login'));
let Register = lazy(() => import('../pages/register'));

const AuthRoutes = () => (
     <BrowserRouter>
        <Suspense fallback={ <Loading /> }>
            <Route exact path="/" component={ Login }/>
            <Route path="/register" component={ Register }/>
        </Suspense>
    </BrowserRouter>
);

 export default AuthRoutes;