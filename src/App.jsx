import Navbar from './components/layout/navbar';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contacts from './components/contacts/contacts';

function App() {
  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-screen pt-24 w-full">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4">
        <About />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}

export default App;