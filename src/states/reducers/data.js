// const reducer=(state="yes",action)=>{
//     if(action.type==='coin'){
//         return state.action.payload
//     }

 
//     else{
//         return state
//     }





// }

// export default reducer





const initialState = {
    data: 'Qwsogvtv82FCd', // or initial data value
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'coin':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;