import React from 'react'
import { useSelector } from 'react-redux'

import { Alert } from '@material-ui/lab'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  // console.log(notification)

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

  // todo: add error notifications https://material-ui.com/components/alert/
  if (notification) {
    return (
      <div>
        <Alert severity="success">
        {notification.notification}
        </Alert>
      </div>
    )
  } else {
    return (<div />)
  }

}

export default Notification