import React from 'react'
import User from '../components/User'

const Profile = (props) => {
  return (
    <div className="Profile">
      <User id={props.id} />
    </div>
  )
}
Profile.propTypes = {
  id: React.PropTypes.number
}

export default Profile
