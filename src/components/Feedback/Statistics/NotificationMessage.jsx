import React from "react"
import PropTypes from "prop-types"
import {Notification} from "components/Feedback/Statistics/Stats.styled"

const NotificationMessage = ({message}) => {
  return (
    <Notification>
      {message}
    </Notification>
  )
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default NotificationMessage
