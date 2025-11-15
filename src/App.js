import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Hi, I am Noah
        </h3>

        <small>
          though you may know me as ponderdev, or ponderer from Discord or Github
        </small>

        <h1>
          I am interested in:
        </h1>

        <ul>
          <li>Cybersecurity</li>
          <li>iOS development</li>
          <li>Web development</li>
          <li>iOS jailbreaking</li>
        </ul>

        <h1>
          Join my small Discord server:
        </h1>

        <a className='App-invite' href="https://discord.gg/gQ4vRy2GEr">.gg/gQ4vRy2GEr</a>

        <h1>
          My projects:
        </h1>

        <ul>
          <li>This site you're on</li>
          <li>Sideload-Manager</li>
        </ul>

      </header>

      <footer className="App-footer">
        © 2025 Sandbox Escape. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
