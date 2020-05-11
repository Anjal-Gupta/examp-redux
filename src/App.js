import { connect } from 'react-redux';
import Counter from './components/counter.js';
import { Incrementasync, onDecClick } from './actions/actions.js';
var mapStateToProps = function(state){
  return {
    inCount:state.inReducer.inCount,
    deCount:state.deReducer.deCount
  };
}
var mapDispatchToProps = function(dispatch){
  return {
    onIncrement:(step)=>{
      dispatch(Incrementasync(step))
    },
    onDecrement:(step)=>{
      dispatch(onDecClick(step))
    }
  }
}
var App= connect(mapStateToProps,mapDispatchToProps)(Counter);
export default App;
