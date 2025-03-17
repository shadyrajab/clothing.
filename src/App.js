import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">THOYZ CLOTHES</a>
          </div>
          <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/arkn98/coming-soon" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Coming Soon.</h1>
            <p>Prepare-se para a experiência única de vestir quem você realmente é com conforto e estilo que falam por si.</p>
          </div>
          <a href="mailto:user@example.com">
            <div className="cta">MEC FÉ 🔥</div>
          </a>
        </div>
        <div className="footer">
          <span>© 2025 Thoyz Clothes</span>
        </div>
      </div>
    );
  }
}

export default App;