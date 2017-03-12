import React from 'react'
import './App.css'
// import HomeView from './views/HomeView'
// import ProfileView from './views/ProfileView'
import CommentsView from './views/CommentsView'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hacker News</h1>
        </header>
        {/* <HomeView /> */}
        {/* <ProfileView /> */}
        <CommentsView />
      </div>
    )
  }
}

export default App
