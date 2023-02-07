import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Today from '../pages/Today';
import Hour from '../pages/Hour';
import Week from '../pages/Week';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/today" />} />
            <Route path="/today" element={<Today />} />
            <Route path="/hour" element={<Hour />} />
            <Route path="/week" element={<Week />} />
        </Routes>
    );
};

export default Routers;
