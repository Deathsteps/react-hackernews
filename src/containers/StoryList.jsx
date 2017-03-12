import React from 'react'
import { connect } from 'react-redux'

import ErrorLayer from '../components/ErrorLayer'
import Loading from '../components/Loading'
import StoryItem from '../components/StoryItem'

import { fetchTopStories } from '../store/actions/stories'
import './StoryList.css'

class StoryList extends React.Component {
  componentDidMount () {
    this.props.fetchTopStories()
  }

  render () {
    if (this.props.fetchError) {
      return <ErrorLayer />
    }

    if (this.props.fetching || !this.props.stories) {
      return <Loading />
    }

    return (
      <div className="view">
      {this.props.stories.map((item) => {
        return (
          <StoryItem
            key={item.id}
            {...item}
          />
        )
      })}
      </div>
    )
  }
}

StoryList.propTypes = {
  fetching: React.PropTypes.bool,
  stories: React.PropTypes.array,
  fetchError: React.PropTypes.object,
  fetchTopStories: React.PropTypes.func
}

export default connect(
  state => state.stories,
  { fetchTopStories }
)(StoryList)
