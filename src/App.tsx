import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';
import {Loader} from './components/Loader';

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */'./pages/Cart'));
const FullPizza = lazy(() => import(/* webpackChunkName: "FullPizza" */'./pages/FullPizza'));



function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='' element={<Home />} />
                <Route path='/pizza/:id' element={<Suspense fallback={<Loader />}> <FullPizza /> </Suspense>} />
                <Route path='/cart' element={<Suspense fallback={<Loader />}> <Cart /> </Suspense>}/>
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
