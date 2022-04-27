import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from './hoc/Layout/Layout';
import O_MNIE from './coponents-stateLess/Content/AboutMe/Info';
import Galerie from './coponents-stateLess/Content/FotoGalley/Gallery';


import './App.css';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <Suspense fallback={<p>Loading ...</p>}>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="linkAnimation" timeout={300}>
            <Routes>
              <Route path="/photo-gallery/info" element={<O_MNIE />}/> 
              <Route path='/photo-gallery/photos' element={<Galerie />}/>
              <Route path="/" element={<O_MNIE />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </Layout>
  );
}

export default App;
