import React from 'react'

const Notification = ({ message, styleMessage }) => {
  if (message === null) {
    return null
  }

  return <div className="error" style={styleMessage}>{message}</div>
}

export default Notification