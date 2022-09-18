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

  /* выбор отзыва гуд ... */
  choiceState = (propertyName) => {
    
     this.setState((prevState) => {
       /* объект с 3ма отзывами и клаками на каждом отзыве сколько кликов */
         /* отдельная цифра сколько кликнули  2, 4 , 6*/
      const value = prevState[propertyName];
     
       return {
        [propertyName]: value + 1
         
       };
       
       
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
  choiceState={this.choiceState}
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
 

  











