import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersProvider } from './context/Filters.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //para poder manejar el context hay que hacer que envuelva la app solo en este caso
  <FiltersProvider> {/**wrap the app for FiltersProvier for have the status global */}
    <App />
  </FiltersProvider>
)
