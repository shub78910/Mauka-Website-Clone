import Navigation from "./Navigation.jsx"
import Header from "./Header.jsx"
import About from "./About.jsx"
import CohortDetails from "./CohortDetails.jsx"
import Modules from "./Modules.jsx"
import './index.css';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Header />

      <About />

      <CohortDetails />

     <Modules />
    </div>
  );
}

export default App;