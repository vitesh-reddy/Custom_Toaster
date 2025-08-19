import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Playground from './pages/Playground';
import { CustomToaster } from './utils/CustomToast';

function App() {
  return (
    <Router>
      <CustomToaster/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
