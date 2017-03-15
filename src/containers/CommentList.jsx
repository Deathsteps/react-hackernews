import React from 'react'
import { connect } from 'react-redux'

import ErrorLayer from '../components/ErrorLayer'
import Loading from '../components/Loading'
import CommentItem from '../components/CommentItem'

import { fetchStoryComments } from '../store/actions/comments'

class CommentList extends React.Component {

  componentDidMount () {
    this.props.fetchStoryComments()
  }

  render () {
    if (this.props.fetchError) {
      return <ErrorLayer />
    }

    if (this.props.fetching || !this.props.comments) {
      return <Loading />
    }

    return (
      <div className="Comment-list">
        {this.props.comments.map((item, key) => {
          return <CommentItem key={key} {...item}/>
        })}
      </div>
    )
  }
}

CommentList.propTypes = {
  fetchStoryComments: React.PropTypes.func,
  fetching: React.PropTypes.bool,
  comments: React.PropTypes.array,
  fetchError: React.PropTypes.object
}

export default connect(
  state => state.comments,
  { fetchStoryComments}
)(CommentList)
