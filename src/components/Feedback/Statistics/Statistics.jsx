import React from "react"
import PropTypes from "prop-types"
import {StatsList, Item, P} from "./Stats.styled"

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <StatsList>
      <Item>
        <P>
          Good: {good}
        </P>
      </Item>
      <Item>
        <P>
          Neutral: {neutral}
        </P>
      </Item>
      <Item>
        <P>
          Bad: {bad}
        </P>
      </Item>
      <Item>
        <P>
          Total: {total}
        </P>
      </Item>
      <Item>
        <P>
          Positive feedback: {positivePercentage}%
        </P>
      </Item>
    </StatsList>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}

export default Statistics
