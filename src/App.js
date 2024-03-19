import { render } from '@testing-library/react';
import Header from './Header';
import logo from './logo.svg';
import Projects from './Projects';

function App() {
  return (
    <div className="app">
      <Header />
      <Projects />
    </div>
  );
}

export default App;
