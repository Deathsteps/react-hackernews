import React from 'react'
import './CommentItem.less'

const CommentItem = (props) => {
  let levelStyle = {
    marginLeft: props.level * 15 + 'px'
  }
  return (
    <div className="Comment-item" style={ levelStyle }>
      <div className="Comment-info">
        <a className="upvote" href="javascript:;">▲</a>
        <span className="author">{ props.by }</span>
        { props.timeText }
        <a className="toggle" href="javascript:;">[-]</a>
      </div>
      <div className="Comment-content" dangerouslySetInnerHTML={{ __html: props.text }}></div>
      <div className="Comment-reply">
        <a href="javascript:;">replay</a>
      </div>
    </div>
  )
}

CommentItem.propTypes = {
  level: React.PropTypes.number,

  by: React.PropTypes.string,
  timeText: React.PropTypes.string,
  text: React.PropTypes.string
}

export default CommentItem
