import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import HeaderPage from './pages/HeaderPage';
import MangaPage from './pages/MangaPage';

const Wrapper = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route element={<Wrapper />}>
          <Route element={<HeaderPage />} >
            <Route path='/' element={ <MangaPage /> } />
          </Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
