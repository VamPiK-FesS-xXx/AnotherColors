import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/null-style/null.css'
const app = document.getElementById('root')
createRoot(app).render(
	<StrictMode>
		<App />
	</StrictMode>
)
