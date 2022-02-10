import React from "react";

import Main from "./pages";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer containerId={"A"} position={toast.POSITION.TOP_LEFT} />
      <Main />
    </div>
  );
}

export default App;
