import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-ui-kit/css/mdb.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
