import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './global.css';
import './assets/fonts/fonts.css';
import { HomePage } from './pages/HomePage';
import { Navigation } from './pages/Navigation';
import { Footer } from './pages/Footer';

const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

const container = document.querySelector('#app');
if (container) {
  createRoot(container).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path="*"
            element={
              <div style={{ padding: '3rem' }}>
                <p>There is nothing here!</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>,
  );
}
