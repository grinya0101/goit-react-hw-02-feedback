import Counter from 'components/feedback/feedback'
import Statistics from 'components/statistics/statistics'
import { Component } from "react";
import Notification from 'components/Notification/notification'
import Section from 'components/Section/Section'

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

choiceBad = () => {
  this.setState((prevState) => {
     return {
      bad: prevState.bad + 1
       
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
  <Section title="Please leave feedback">
   <Counter  
  choiceGoodq={this.choiceGood}
  choiceNeutralq={this.choiceNeutral}
  choiceBadq={this.choiceBad}
  />

  </Section>
   <Section title="Statistics">
   {this.totalFeedback() ?
     <Statistics good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.totalFeedback()} 
            positivePercentage={this.feedbackPercentage()}/>
            
            :
            <Notification message="There is no feedback"/>
          }
    </Section>
  </div>
  </>
  );
};

}
 

  











