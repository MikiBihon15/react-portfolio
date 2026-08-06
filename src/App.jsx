import About from './components/about';
import Projects from './components/projects';
import Contacts from './components/contacts';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>My Portfolio</h1>
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;