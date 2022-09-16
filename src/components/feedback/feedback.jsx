import PropTypes from 'prop-types';

const Counter = ({choiceGoodq, choiceNeutralq, choiceBadq}) => (
        <>
            
           <button type="button" onClick={choiceGoodq}>Good</button>
           <button type="button" onClick={choiceNeutralq}>Neutral</button>
           <button type="button" onClick={choiceBadq}>Bad</button>
           
        </>
    )
  
    
export default Counter;

Counter.propTypes = {
  choiceGoodq: PropTypes.func,
  choiceNeutralq: PropTypes.func,
  choiceBadq: PropTypes.func,
  
}