import Navbar from './components/layout/navbar'; // 1. Import the Navbar component
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contacts from './components/contacts/contacts';

function App() {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* 2. Place Navbar right at the top */}
      <Navbar /> 

      {/* Your existing sections stay below it */}
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;