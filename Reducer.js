
  const initialState = {
    details: {
    firstname:"",
    lastname:"",
   
    }};
    const Reducer = (state = initialState , action) => {
    switch(action.type){
    case "NAME" :{
    return{
    ...state,
    details : action.details
    }}
    default:{
    return state;
    }}}
    export default Reducer;