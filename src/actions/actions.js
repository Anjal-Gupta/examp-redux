export function onIncClick(step){
    return {
      type:"INC",
      step
    }
  }
  export function Incrementasync(step){
    return (dispatch)=>{
      setTimeout(()=>{
          dispatch(onIncClick(step));
      },3000)
    }
  }
  export function onDecClick(step){
    return {
      type:"DEC",
      step
    }
  }
  