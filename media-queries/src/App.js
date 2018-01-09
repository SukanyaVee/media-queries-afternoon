import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import p1 from './1.png'
import p2 from './2.png'
import p3 from './3.png'

class App extends Component {
  constructor(){
    super();
    this.state = {
      className: "App-header"
    }
  }

  render() {
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction()};
    //Choose header as element to be manipulated
    // var header = document.getElementById("App-Header");

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    
    function myFunction() {
      if (window.pageYOffset >= 50) {
        this.state.className="sticky";
      } else {
        this.state.className="App-header";
      }
    }

    return (
      <div className="App">
        <header className={this.state.className} id="App-Header">
            <div className="App-title">Start Bootstrap</div>
            <div className="menu">SERVICES&nbsp; PORTFOLIO &nbsp;ABOUT&nbsp; TEAM &nbsp;CONTACT</div>
            <button className="menu-btn"><b>MENU=</b></button>
        </header> 
        <main className="main">
        <div className="pic-content">
          <div className="line1">Welcome To Our Studio!</div>
          <div className="line2"><b>IT'S NICE TO MEET YOU</b></div>
          <button className="content-btn"><b>TELL ME MORE</b></button>
        </div>
        <div className="services">
          <div className="subservices"><b>SERVICES</b></div>
          <div className="services-desc">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="services-icons">
            <span className="dabba">
              <img src={p1}/>
              <div className="service-title"><b>E-Commerce</b></div>
              <div className="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</div>
            </span>
            <span className="dabba">
              <img src={p2}/>
              <div className="service-title"><b>Responsive<br/> Design</b></div>
              <div className="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</div>
            </span>
            <span className="dabba">
              <img src={p3}/>
              <div className="service-title"><b>Web Security</b></div>
              <div className="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</div>
            </span>
          </div>
        </div>
        </main>
      </div>
    );
  }
}

export default App;
