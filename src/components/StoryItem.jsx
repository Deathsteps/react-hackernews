import React from 'react'

const StoryItem = (props) => {
  return (
    <div className="Story-item">
      <h3 className="Story-title">
        <a href="#">{props.title}</a>
      </h3>
      <div className="Story-source">
        <a href="#">{props.source}</a>
      </div>
      <div className="Story-info">
        {props.score} points by <a href="#">{props.by}</a> { props.timeText/* 4 hours ago */ }
      </div>
      <div className="Story-comments">
        <a href="#">{props.descendants} comments</a>
      </div>
    </div>
  )
}

StoryItem.propTypes = {
  title: React.PropTypes.string,
  source: React.PropTypes.string,
  score: React.PropTypes.number,
  by: React.PropTypes.string,
  timeText: React.PropTypes.string,
  descendants: React.PropTypes.number
}

export default StoryItem
