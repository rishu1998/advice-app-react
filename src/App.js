import { Component } from 'react'
import './App.css'
import axios from 'axios'
import React from 'react'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      advice: '',
    }
  }
  componentDidMount() {
    this.fetchAdvice()
  }
  fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip
        this.setState({ advice })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    const { advice } = this.state
    return (
      <div className="app">
        <div className="text">ADVICE OF THE DAY !</div>
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    )
  }
}
