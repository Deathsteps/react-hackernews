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
        <span className="User-content">{ props.createdText }</span>
      </li>
      <li className="User-item">
        <span className="User-name">karma:</span>
        <span className="User-content">{ props.karma }</span>
      </li>
      <li className="User-item">
        <span className="User-name">about:</span>
        <p className="User-content">{ props.about }</p>
      </li>
    </ul>
  )
}
User.propTypes = {
  id: React.PropTypes.string,
  createdText: React.PropTypes.string,
  karma: React.PropTypes.number,
  about: React.PropTypes.string
}

export default User
