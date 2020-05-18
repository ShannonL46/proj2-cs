import {Action} from './actions';


const initialState = {
    isWaiting: false,
    writs: [],
};

function reducer(state = initialState, action){
    switch (action.type) {
        case Action.LoadWrits:
            return{
                ...state,
                writs: action.payload,
            };
        case Action.FinishNewW:
           return{
                ...state,
                writs: [action.payload, ...state.writs],
            };
        case Action.EditMode:
           return {
                ...state,
                writs: state.writs.map(writ => {
                    if (writ.id === action.payload.id){
                        return {...writ, editing: true};
                    } else{
                        return writ;
                    }
                }),
            };
            
            default:
             return state;
}
}

export default reducer;