import React from 'react'
import './App.css'
// import HomeView from './views/HomeView'
import ProfileView from './views/ProfileView'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hacker News</h1>
        </header>
        {/* <HomeView /> */}
        <ProfileView />
      </div>
    )
  }
}

export default App
