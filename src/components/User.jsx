import React from 'react'
import './User.less'

const User = (props) => {
  return (
    <ul className="User">
      <li className="User-item">
        <span className="User-name">user:</span>
        <span className="User-content">{ props.id }</span>
      </li>
      <li className="User-item">
        <span className="User-name">created:</span>
        <span className="User-content">917 days ago</span>
      </li>
      <li className="User-item">
        <span className="User-name">karma:</span>
        <span className="User-content">1890</span>
      </li>
      <li className="User-item">
        <span className="User-name">about:</span>
        <p className="User-content">svenfaw</p>
      </li>
    </ul>
  )
}
User.propTypes = {
  id: React.PropTypes.number
}

export default User
