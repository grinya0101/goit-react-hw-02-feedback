import PropTypes from 'prop-types';

const Counter = ({choiceState}) => (
        <>
            
           <button type="button" onClick={() => choiceState("good")}>Good</button>
           <button type="button" onClick={() => choiceState("neutral")}>Neutral</button>
           <button type="button" onClick={() => choiceState("bad")}>Bad</button>
           
        </>
    )
  
    
export default Counter;

Counter.propTypes = {
  choiceGoodq: PropTypes.func,
  choiceNeutralq: PropTypes.func,
  choiceBadq: PropTypes.func,
  
}