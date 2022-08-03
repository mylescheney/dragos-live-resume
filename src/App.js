import './App.css';

// Components
import NavBar from './components/NavBar';
import GreetingBanner from './components/GreetingMessage';
import Introduction from './components/Introduction';

function App() {
  return (
    <div>
      <NavBar />
      <section id="introduction" >
        <GreetingBanner />
        <Introduction />
      </section>
      <section>
        <div id="background">
          <h2>My Background</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
