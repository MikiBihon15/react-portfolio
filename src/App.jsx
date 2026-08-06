import Navbar from './components/layout/navbar';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contacts from './components/contacts/contacts';

function App() {
  return (
    <div className="bg-zinc-200 text-zinc-200 min-h-screen pt-24 w-full font-sans anstialiased">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 space-y-16 pb-16">
        <About />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}

export default App;