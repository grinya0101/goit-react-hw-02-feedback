import Counter from 'components/feedback/feedback'
import Statistics from 'components/statistics/statistics'
import { Component } from "react";

export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  choiceGood = () => {
    this.setState((prevState) => {
       return {
         good: prevState.good + 1
         
       };
    })
 };


 choiceNeutral = () => {
  this.setState((prevState) => {
     return {
      neutral: prevState.neutral + 1
       
     }
  })
};


totalFeedback(){
  return this.state.good + this.state.neutral + this.state.bad
 };

 feedbackPercentage(){
 return Math.round((this.state.good / this.totalFeedback()) * 100)
 };

 render(){
  return (
  <>
  <div>
    <section>
    <Statistics good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.totalFeedback()}
            positivePercentage={this.feedbackPercentage()}/>
  <Counter  
  choiceGoodq={this.choiceGood}
  choiceNeutralq={this.choiceNeutral}
  choiceBadq={this.choiceBad}
  
  />


  
    </section>
  </div>
  
   </>
  );
};

}
 

  











