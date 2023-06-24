import React, { Component } from 'react'
import GreetingsPage from './GreetingsPage.js'
import Navbar from './Navbar.js'
import Projects from './Projects.js'
import About from './About.js'
import Contact from './Contact.js'
import Footer from './Footer.js'
import Cursor from './Cursor.js'
import Loading from './Loading.js'

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Loading />
        <Navbar />
        <GreetingsPage />
        <Projects />
        <About />
        <Contact />
        <Footer />
        <Cursor />
      </div>
    )
  }
}
