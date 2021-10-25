import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Container, Modal, Tab } from 'react-bootstrap';
import Navitem from './Navitem';

// Reference: https://codeburst.io/learn-react-js-build-a-portfolio-single-page-application-spa-ba001082a711

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      'NavItemActive':''
    }
  }

  activeitem = (x) => {
    if(this.state.NavItemActive.length > 0){
      document.getElementById(this.state.NavItemActive).classList.remove('active');
    }
    this.setState({'NavItemActive':x}, () => {
      document.getElementById(this.state.NavItemActive).classList.add('active');
    });
  };

  render() {
    return (
      <header class="flexSpaceBetween">
        <h1>Consolata Njeri</h1>

        <nav>
          <ul>
              <Navitem item="About" tolink="/" activec={this.activeitem}></Navitem>
              <Navitem item="Portfolio" tolink="/portfolio" activec={this.activeitem}></Navitem>
              <Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem>
              <Navitem item="Resume" tolink="/resume" activec={this.activeitem}></Navitem>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar