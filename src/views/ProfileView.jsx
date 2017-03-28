import React from 'react'
import Profile from '../containers/Profile'

const ProfileView = ({ match }) => {
  return <Profile id={match.params.id} />
}
ProfileView.propTypes = {
  match: React.PropTypes.object
}

export default ProfileView
