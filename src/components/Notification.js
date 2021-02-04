import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'


const Notification = () => {
  const notification = useSelector(state => state.notification)

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