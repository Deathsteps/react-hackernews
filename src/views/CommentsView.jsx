import React from 'react'

import CommentEditor from '../containers/CommentEditor'
import CommentList from '../containers/CommentList'

const CommentsView = () => {
  return (
    <div className="view">
      <CommentEditor />
      <CommentList />
    </div>
  )
}

export default CommentsView
