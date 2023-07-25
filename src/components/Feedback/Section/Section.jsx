import React from "react"
import PropTypes from "prop-types"
import {SectionWrapper, Title} from "components/Feedback/Section/Section.styled"

const Section = ({title, children}) => {
  return (
    <SectionWrapper>
      <Title>
        {title}
      </Title>
      {children}
    </SectionWrapper>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section
