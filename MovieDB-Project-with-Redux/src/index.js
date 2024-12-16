import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './index.css';
import { Provider } from "react-redux";
import store from "./redux/store";

const root = document.getElementById('root');

createRoot(root)
  .render(
    <Provider store={store}>
      <App />
    </Provider>
  );
