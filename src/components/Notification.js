import React from 'react'
import { useSelector } from 'react-redux'


const Notification = () => {
  const notification = useSelector(state => state.notification)

  console.log(notification)

  let notificationBackgroundColor
  if (!notification) {
    notificationBackgroundColor = 'white'
  } else {
    notificationBackgroundColor = notification.color
  }

  // const notificationStyle = {
  //   color: messageColor,
  //   background: 'lightgrey',
  //   fontSize: 20,
  //   borderStyle: 'solid',
  //   borderRadius: 5,
  //   padding: 10,
  //   marginBottom: 10,
  // }

  const style = {
    backgroundColor: notificationBackgroundColor,
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notification) {
    return (
      <div style={style}>
        {notification.notification}
      </div>
    )
  } else {
    return (<div />)
  }

}

export default Notification