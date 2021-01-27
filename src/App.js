import "./App.css";
import Landing from "./Components/Landing/Landing";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} />
    </BrowserRouter>
  );
}

export default App;
