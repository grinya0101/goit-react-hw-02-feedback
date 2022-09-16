

const Counter = ({choiceGoodq, choiceNeutralq, choiceBadq}) => (
        <>
            <h1>Please leave feedback</h1>
           <button type="button" onClick={choiceGoodq}>Good</button>
           <button type="button" onClick={choiceNeutralq}>Neutral</button>
           <button type="button" onClick={choiceBadq}>Bad</button>
           <h2>Statistics</h2>
           {/* <ul>
            <li>Good: <span>{this.state.good}</span></li>
            <li>Neutral: <span>{this.state.neutral}</span></li>
            <li>Bad: <span>{this.state.bad}</span></li>
            <li>Total: <span>{this.totalFeedback()}</span></li>
            <li>Positive feedback : <span>{this.feedbackPercentage()}%</span></li>
           </ul> */}
        </>
    )
  




export default Counter;