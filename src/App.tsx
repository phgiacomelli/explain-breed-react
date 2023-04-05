import { Router, Route } from 'react-router-dom';
import "./app.css";
import Presentation from './components/presentation/index';
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Presentation/>
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
