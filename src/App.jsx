import React from 'react'
import StoryList from './containers/StoryList'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hacker News</h1>
        </header>
        <StoryList />
      </div>
    )
  }
}

export default App
