export default function({dispatch}) {
  return next => action => {

    //If the action does not have a payload
    // or the payload does not have a .then property
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    console.log('We do have a promise', action);

    //Make sure promise is resolved
    action.payload
      .then(response => {

        //Create new action with old type
        //But replace payload
        const newAction = {...action , payload:response}
        dispatch(newAction);  
      });
  };
}
