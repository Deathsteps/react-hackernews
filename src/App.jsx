import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTopStories } from './store/actions/stories'
import './assets/App.css'
import './assets/Story.css'

class App extends Component {
  componentDidMount () {
    this.props.fetchTopStories()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hacker News</h1>
        </header>
        <div className="Story-list">
        {
          [1,2,3,4,5,6,7].map((item) => {
            return (
              <div className="Story-item" key={item}>
                <h3 className="Story-title">
                  <a href="#">Finding Free Food with Python</a>
                </h3>
                <div className="Story-source">
                  <a href="#">jamesbvaughan.com</a>
                </div>
                <div className="Story-info">
                  116 points by <a href="#">jamesbvaughan</a> 4 hours ago
                </div>
                <div className="Story-comments">
                  <a href="#">15 comments</a>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

App.propTypes = {
  fetchTopStories: PropTypes.func
}

export default connect(
  state => state.stories,
  { fetchTopStories }
)(App)
