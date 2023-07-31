import React from "react"
import PropTypes from "prop-types"
import {Button, BtnWrapper} from "./FeedbackOptions.styled"

const FeedbackOptions = ({addFeedback, options}) => {
  return (
    <BtnWrapper>
      {options.map(option => {
        return (
          <Button
            key={option}
            type="button"
            onClick={() => addFeedback(option)}
          >
            {option}
          </Button>
        )
      })}
    </BtnWrapper>
  )
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  addFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions
