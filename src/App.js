import './App.css';

// Components
import NavBar from './components/NavBar';
import GreetingBanner from './components/GreetingMessage';
import Introduction from './components/Introduction';
import BackgroundContent from './components/BackgroundContent';

function App() {
  return (
    <div>
      <NavBar />
      <section id="introduction" >
        <GreetingBanner />
        <Introduction />
      </section>
      <section id="background">
        <BackgroundContent />
      </section>
    </div>
  );
}

export default App;
