import './App.css';

// Components
import NavBar from './components/NavBar';
import GreetingBanner from './components/GreetingMessage';
import Introduction from './components/Introduction';

function App() {
  return (
    <div>
      <NavBar />
      <section id="#" >
        <GreetingBanner />
        <Introduction />
      </section>
    </div>
  );
}

export default App;
