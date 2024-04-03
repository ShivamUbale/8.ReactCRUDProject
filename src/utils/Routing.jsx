import React from 'react';
import { Routes, Route, Router } from 'react-router-dom'
import Home from '../components/Home';
import Details from '../components/Details';
import Create from '../components/Create';
import Edit from '../components/Edit';

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/details/:id' element={<Details/>} />
            <Route path='/edit/:id' element={<Edit/>} />
        </Routes>
    );
}

export default Routing;