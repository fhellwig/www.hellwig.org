import 'bulma/css/bulma.css';
import { createRoot } from 'react-dom/client';
import { App } from './app.js';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
