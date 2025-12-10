import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from './components/ErrorBoundary';
import DirectImageTest from './components/DirectImageTest';

const App = () => {
  return (
    <ErrorBoundary>
      <Box 
        sx={{ 
          width: '100%',
          overflowX: 'hidden'
        }}
      >
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/test-images" element={<DirectImageTest />} />
        </Routes>
        <Footer />
      </Box>
    </ErrorBoundary>
  );
};

export default App;
