import React from 'react'

import StoryItem from '../components/StoryItem'
import './CommentEditor.less'

const testData = require('../store/__tests__/mockData/stories.raw.json')[0]

const CommentEditor = () => {
  return (
    <div className="Comment-editor">
      <StoryItem isCommentsHide={true} {...testData} source="bootstrap.com" timeText="2 year ago"/>
      <textarea name="text" rows="6"></textarea>
      <button>Add Comment</button>
    </div>
  )
}

export default CommentEditor
