import React from 'react';
import { Routes, Route, Navigate, RedirectFunction } from 'react-router-dom';
import SRP from './SRP/SRP';
import OCP from './OCP/OCP';
import LSP from './LSP/LSP';
import ISP from './ISP/ISP';
import DIP from './DIP/DIP';
import Home from './Home/Home';

const Main: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/srp" element={<SRP />} />
            <Route path="/ocp" element={<OCP />} />
            <Route path="/lsp" element={<LSP />} />
            <Route path="/isp" element={<ISP />} />
            <Route path="/dip" element={<DIP />} />
            {/* <Route path="*" element={<Navigate to="/" replace={true} />} /> */}
        </Routes>
    );
};

export default Main;