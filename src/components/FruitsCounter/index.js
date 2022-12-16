// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatBananas = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-bg-container">
          <h1 className="heading">
            Bob ate <span>{mangoes}</span> mangoes <span>{bananas}</span>{' '}
            bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-card">
              <img
                className="fruit"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="fruit-btn"
                type="button"
                onClick={this.eatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-card">
              <img
                className="fruit"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="fruit-btn"
                type="button"
                onClick={this.eatBananas}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
