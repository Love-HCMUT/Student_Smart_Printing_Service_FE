import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import TK from './TK-main.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TK />
  </StrictMode>,
)
