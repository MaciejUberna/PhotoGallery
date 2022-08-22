import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from './hoc/Layout/Layout';
import routerData from './router/mainMenu';
import './App.css';

const O_MNIE = React.lazy(() => {
  return import('./coponents-stateLess/Content/AboutMe/Info');
});

const Gallery = React.lazy(() => {
  return import('./coponents-stateLess/Content/FotoGalley/Gallery');
});

function App() {
  const location = useLocation();

  return (
    <Layout>
      <Suspense fallback={<p>Loading ...</p>}>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="linkAnimation" timeout={300}>
            <Routes>
              {routerData.map((r, idx) => (
                <Route key={'0'+idx} path={r.href} element={r.element} />
              ))}
              <Route 
                key="1PhotoGallery" 
                path="/photo-gallery/photos/:year" 
                element={<Gallery/>} 
              />
              <Route 
                key="2PhotoGallery" 
                path="/photo-gallery/photos/:year/:month" 
                element={<Gallery/>} 
              />
              <Route 
                key="3PhotoGallery" 
                path="/photo-gallery/photos/:year/:month/:day" 
                element={<Gallery/>} 
              />
              <Route 
                key="4PhotoGallery" 
                path="/photo-gallery/photos/:year/:month/:day/:pic" 
                element={<Gallery/>} 
              />
              <Route key="XASTWPI11FLG" path="/" element={<O_MNIE />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </Layout>
  );

};

export default App;
