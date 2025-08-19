import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Installation from './pages/Installation';
import Demo from './pages/Demo';
import APIReference from './pages/APIReference';
import { CustomToaster } from './utils/CustomToast';

function App() {
  return (
    <Router>
      <CustomToaster/>
      <Layout>
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/api" element={<APIReference />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
