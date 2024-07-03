import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.css";
import { store } from './store/store'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
