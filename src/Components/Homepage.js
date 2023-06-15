import React, { Component } from 'react'
import GreetingsPage from './GreetingsPage.js'
import Navbar from './Navbar.js'

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <GreetingsPage />
      </div>
    )
  }
}
