import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = document.getElementById('root');

createRoot(root)
  .render(<App />);
