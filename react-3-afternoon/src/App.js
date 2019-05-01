import React, {Component} from 'react';
import './App.css';
import DataDisplay from './Components/DataDisplay'
import Data from './data'
import Nav from './Components/Nav'

class App extends Component {
  constructor() {
    super()
    this.state = {
      dataNumToDisplay: 0,
      dataList: Data.slice(),
    }
  }

  handleUpdateDataNumIncrease = () => {
    let addedIndex = this.state.dataNumToDisplay
    if (addedIndex === 24) {
      addedIndex = 0
    } else {
      addedIndex++
    }
    this.setState({dataNumToDisplay: addedIndex})
  }

  handleUpdateDataNumDecrease = () => {
    let decreaseIndex = this.state.dataNumToDisplay
    if (decreaseIndex === 0) {
      decreaseIndex = 24
    } else {
      decreaseIndex--
    }
    this.setState({dataNumToDisplay: decreaseIndex})
  }

  render() {
    return (
      <div>
        <header className="header">
          <h2 className="headerText">Home</h2>
        </header>
        <div className="dataAndNavBarBox">
          <DataDisplay dataNumToDisplay={this.state.dataNumToDisplay} 
          dataList={this.state.dataList} />
          <Nav className="navBarBottom" dataNum={this.state.dataNumToDisplay} dataNumPlus={this.handleUpdateDataNumIncrease} dataNumMinus={this.handleUpdateDataNumDecrease} />

          
        </div>
      </div>
    )
  }
}

export default App;
