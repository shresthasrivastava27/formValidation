import { lazy, Suspense } from 'react';

import CustomLoading from './Custom/CustomLoading';
// components
const Form = lazy(() => import('./pages/Form'));
const DisplayPost = lazy(() => import('./pages/DisplayPost'))



export const NavRoutes = [
    {
        path: '/',
        element: (
            <Suspense fallback={<CustomLoading />}>
                <Form />
            </Suspense>
        ),
    },

    {
        path: 'post',
        element: (
            <Suspense fallback={<CustomLoading />}>
                <DisplayPost />
            </Suspense>
        ),
    },


];