import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tech from "./components/Tech";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Tech />
        <Work />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-blue-100/80">
          <p>© {new Date().getFullYear()} NextGen CodexHub. All rights reserved.</p>
          <div className="text-sm">React • TypeScript • Node.js • Express • React Native</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
