import { HomePage } from "./pages/HomePage"
import { ToastContainer } from "react-toastify";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <HomePage />
      <ToastContainer autoClose={1000} />
    </>
  )
}

export default App
