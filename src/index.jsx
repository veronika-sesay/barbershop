import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import './assets/fonts/fonts.css';

createRoot(document.querySelector('#app')).render(<HomePage />);
