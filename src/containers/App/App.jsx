import { BrowserRouter, Route, Routes } from 'react-router-dom';

import routesConfig from '@routes/routesConfig';

import Header from '@components/Header/Header';

import styles from './App.module.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
