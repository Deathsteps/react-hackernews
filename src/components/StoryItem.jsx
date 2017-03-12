import React from 'react'
import './StoryItem.less'

const StoryItem = (props) => {
  return (
    <div className="Story-item">
      <h3 className="Story-title">
        <a href={props.url} target="__blank">{props.title}</a>
      </h3>
      <div className="Story-source">
        <a href={props.sourceUrl} target="__blank">{props.source}</a>
      </div>
      <div className="Story-info">
        {props.score} points by <a href="#">{props.by}</a> { props.timeText }
      </div>
      { !props.isCommentsHide ?
        <div className="Story-comments">
          <a href="#">{props.descendants} comments</a>
        </div> : null }
    </div>
  )
}

StoryItem.propTypes = {
  title: React.PropTypes.string,
  url: React.PropTypes.string,
  source: React.PropTypes.string,
  sourceUrl: React.PropTypes.string,
  score: React.PropTypes.number,
  by: React.PropTypes.string,
  timeText: React.PropTypes.string,
  descendants: React.PropTypes.number,

  isCommentsHide: React.PropTypes.bool
}

export default StoryItem
