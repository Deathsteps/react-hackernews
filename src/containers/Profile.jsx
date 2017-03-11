import React from 'react'
import './Profile.less'

const Profile = () => {
  return (
    <div className="Profile">
      <ul className="Profile-info">
        <li className="info-item">
          <span className="info-name">user:</span>
          <span className="info-content">svenfaw</span>
        </li>
        <li className="info-item">
          <span className="info-name">created:</span>
          <span className="info-content">917 days ago</span>
        </li>
        <li className="info-item">
          <span className="info-name">karma:</span>
          <span className="info-content">1890</span>
        </li>
        <li className="info-item">
          <span className="info-name">about:</span>
          <p className="info-content">svenfaw</p>
        </li>
      </ul>
    </div>
  )
}

export default Profile
