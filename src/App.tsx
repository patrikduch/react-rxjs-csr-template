import HeaderContainer from '@components/shared/skeleton/Header-Container';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home-Page';
import JsonPlaceholderPage from './pages/Json-Placeholder-Page';
import TestPage from './pages/Test-Page';

const App: React.FC = () => {
  return (
    <>
      <HeaderContainer/>
      <Routes>
          <Route path="/" element={
              <HomePage />    
          }> 
        </Route>

        <Route path="/test" element={
              <TestPage />  
          }>            
        </Route>

        <Route path="/json-placeholder" element={
              <JsonPlaceholderPage />  
          }>            
        </Route>
      </Routes>
    </>
  );
}

export default App;
