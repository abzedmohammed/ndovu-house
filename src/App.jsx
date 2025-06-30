import { RouterProvider } from 'react-router-dom';
import './App.css';
import './text.css';
import './antd.css';
import { router } from './routes/router';


const App = () => <RouterProvider router={router} />;

export default App;
