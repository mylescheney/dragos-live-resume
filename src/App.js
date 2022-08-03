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
      <section id="background">
          <div className='backgroundHeader'>
            <h2>My Background</h2>
          </div>
          <div>
            <p>The first language of code I learned was javascript. I started teaching myself in middle school with Codecademy and other free resources. When I got to high school, I took all the electives related to programming.</p>
            <p>I didn't see myself going into computer science for a career when I graduated high school. Instead, I wanted to pusruse personal training. I started training out of a local gym when I finished high school, and got a job in DC at the end of that year.</p>
            <p>After the Covid shutdown, I started building apps again. It became a hobby and I started considering programming for my long-term career again.</p>
            <p>I completed Nucamp's Mobile &#38; Web Development Bootcamp. I am now enrolled in college and plan to double major in health science and computer science.</p>
            <p></p>
          </div>
      </section>
    </div>
  );
}

export default App;
