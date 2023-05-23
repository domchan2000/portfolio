import './App.css';
import { Banner } from './components/Banner';
import { MainNav } from './components/MainNav';
// import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <MainNav/>
      <Banner/>
      {/* <Skills/> */}
      <Projects/>
    </div>
  );
}

export default App;
