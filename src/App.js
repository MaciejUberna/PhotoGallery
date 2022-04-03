import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import O_MNIE from './coponents-stateLess/Content/AboutMe/Info';
import Galerie from './coponents-stateLess/Content/FotoGalley/Gallery';


import './App.css';

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading ...</p>}>{routes}</Suspense>
    </Layout>
  );
}

let routes = (
  <Routes>
    <Route path="/photo-gallery/info" element={<O_MNIE />}/> 
    <Route path='/photo-gallery/photos' element={<Galerie />}/>
    <Route path="/" element={<O_MNIE />} />
  </Routes>
);

export default App;
