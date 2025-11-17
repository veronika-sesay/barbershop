import './style.css';
import Navigation from '../Navigation';

export const HomePage = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <div className="black">
          <p>hello world</p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};
