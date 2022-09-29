import './App.css';
import Home from './components/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
