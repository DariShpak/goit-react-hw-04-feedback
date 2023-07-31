import {useState} from "react"
import FeedbackOptions from "./Feedback/FeedbackOptions/FeedbackOptions"
import Section from "./Feedback/Section/Section"
import Statistics from "./Feedback/Statistics/Statistics"
import NotificationMessage from "./Feedback/Statistics/NotificationMessage"
import {Container} from "./Feedback/Feedback.styled"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addFeedback = option => {
    switch (option) {
      case "good":
        setGood(prevState => prevState + 1)
        break

      case "neutral":
        setNeutral(prevState => prevState + 1)
        break

      case "bad":
        setBad(prevState => prevState + 1)
        break

      default:
        return
    }
  }
  const options = {good, neutral, bad}

  const totalFeedback = good + neutral + bad

  const countPositivePercentage = () => {
    return totalFeedback > 0 ? Math.round(good / totalFeedback * 100) : 0
  }

  const positivePercentage = countPositivePercentage()

  return (
    <Container>
      <Section title="Please rate our service">
        <FeedbackOptions
          addFeedback={addFeedback}
          options={Object.keys(options)}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0
          ? <NotificationMessage message={"There is no feedback yet"} />
          : <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />}
      </Section>
    </Container>
  )
}

export default App
