import React from 'react'
import './StoryItem.less'
import { Link } from 'react-router-dom'

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
        {props.score} points by <Link to={`/profile/${props.by}`}>{props.by}</Link> { props.timeText }
      </div>
      { !props.isCommentsHide ?
        <div className="Story-comments">
          <Link to={`/comments/${props.id}`}>{props.descendants} comments</Link>
        </div> : null }
    </div>
  )
}

StoryItem.propTypes = {
  id: React.PropTypes.number,
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
