import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  // state = {
  //   active: 0,
  // }
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({
  //       active: Math.floor(Math.random() * 3)
  //     })
  //   }, 10000)
  // }
  render() {
    return (
      <Router basename='/male'>
        <div className='app'>
          <header>
            {<Header />}
          </header>
          <main>
            <nav>
              {<Navigation />}
            </nav>
            <section>
              {<Page />}
            </section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
