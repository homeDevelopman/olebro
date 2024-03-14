import {NavBar} from "./components/navBar/NavBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from "./components/banner/Banner";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
