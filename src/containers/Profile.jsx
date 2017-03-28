import React from 'react'
import { connect } from 'react-redux'

import ErrorLayer from '../components/ErrorLayer'
import Loading from '../components/Loading'
import User from '../components/User'

import { fetchUser } from '../store/actions/profile'

class Profile extends React.Component {

  componentDidMount () {
    this.props.fetchUser()
  }

  render () {
    if (this.props.fetchError) {
      return <ErrorLayer />
    }

    if (this.props.fetching || !this.props.user) {
      return <Loading />
    }

    return (
      <div className="Profile">
        <User {...this.props.user} />
      </div>
    )
  }
}

Profile.propTypes = {
  id: React.PropTypes.string,
  user: React.PropTypes.object,
  fetchError: React.PropTypes.object,
  fetching: React.PropTypes.bool,

  fetchUser: React.PropTypes.func
}

export default connect(
  state => state.profile,
  ( dispatch, ownProps ) => ({
    fetchUser: () => dispatch(fetchUser(ownProps.id))
  })
)(Profile)
