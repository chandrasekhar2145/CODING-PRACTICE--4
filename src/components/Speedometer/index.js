// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onApplyBrake = () => {
    const {speed} = this.state

    if (speed >= 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
          className="image"
        />

        <div className="speed-con">
          <h1 className="speedometer-heading">Speed is {speed}mph</h1>
          <p className="speedometer-para">
            Min limit is 0mph, Max limit is 200mph
          </p>
          <div>
            <button className="accelerate-btn" onClick={this.onClickAccelerate}>
              Accelerate
            </button>
            <div>
              <button className="applybreak-btn" onClick={this.onApplyBrake}>
                Apply Brake
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
