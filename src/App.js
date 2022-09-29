import './App.css';
import Home from './components/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <ToastContainer></ToastContainer>
      <Question></Question>
    </div>
  );
}

export default App;
