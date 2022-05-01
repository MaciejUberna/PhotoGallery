import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from './hoc/Layout/Layout';
import routerData from './coponents-stateLess/Router/mainMenu';
import './App.css';

const O_MNIE = React.lazy(() => {
  return import('./coponents-stateLess/Content/AboutMe/Info');
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
                <Route key={idx} path={r.href} element={r.element} />
              ))}
              <Route key="XASTWPI11FLG" path="/" element={<O_MNIE />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </Layout>
  );

};

export default App;
