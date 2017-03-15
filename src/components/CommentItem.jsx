import React from 'react'
import './CommentItem.less'

const CommentItem = (props) => {
  let levelStyle = {
    marginLeft: props.level * 15 + 'px',
    display: props.displayed ? 'block' : 'none'
  }
  return (
    <div className="Comment-item" style={ levelStyle }>
      <div className="Comment-info">
        <a className="upvote" href="javascript:;">▲</a>
        <span className="author">{ props.by }</span>
        { props.timeText }
        {
          props.kids ? // only display the toggle link when it has sub comments
            <a className="toggle"
              href="javascript:;"
              onClick={() => props.onSubToggle(props.id)}>
              { props.subDisplayed ? '[-]' : `[+${props.kids.length}]`}
            </a> : null
        }
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
  displayed: React.PropTypes.bool,
  subDisplayed: React.PropTypes.bool,

  id: React.PropTypes.number,
  by: React.PropTypes.string,
  timeText: React.PropTypes.string,
  text: React.PropTypes.string,
  kids: React.PropTypes.array,

  onSubToggle: React.PropTypes.func
}

export default CommentItem
