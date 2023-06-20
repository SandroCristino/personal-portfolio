import React, { Component } from 'react'
import GreetingsPage from './GreetingsPage.js'
import Navbar from './Navbar.js'
import Projects from './Projects.js'
import About from './About.js'
import Contact from './Contact.js'


export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <GreetingsPage />
        <Projects />
        <About />
        <Contact />
      </div>
    )
  }
}
