import Navbar from './components/layout/navbar';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contacts from './components/contacts/contacts';

function App() {
  return (
    /* min-h-screen & w-full ensures background covers the whole screen on all devices */
    <div className="bg-zinc-200 text-zinc-900 min-h-screen w-full antialiased">
      <Navbar />
      
      {/* 
        Responsive Container:
        - pt-28: Extra space at top so content sits below fixed navbar
        - px-4 sm:px-6 lg:px-8: Responsive side margins (narrower on phones, wider on laptops)
        - max-w-4xl lg:max-w-6xl: Keeps content centered and readable on giant screens
      */}
      <main className="max-w-5xl lg:max-w-6xl mx-auto bg-zinc-200 border-x border-zinc-300 shadow-lg min-h-screen px-6 sm:px-10 pt-24 sm:pt-28 pb-16 space-y-16">
        <section id="hero">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contacts">
          <Contacts />
        </section>
      </main>
    </div>
  );
}

export default App;