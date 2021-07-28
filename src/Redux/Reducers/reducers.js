const initialState = {
    count: 0,
    userType: "Admin"
}

function addReducer(state = initialState, {type, payload}) {  //actions = {type, payload}
    switch(type) {
        case "INCREMENT" : { //taking state or initial state and updating the count
            return {...state, count:state.count + payload}
        }
        case "DECREMENT" : {
            return {...state, count:state.count - payload}
        }
        default : return state;
    }
}

export default addReducer;