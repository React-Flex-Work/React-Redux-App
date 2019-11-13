import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, DELETE } from "../actions"

const initialState = {
    characters: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            console.log(action);
            return {
                ...state,
                isFetching: false,
                error: '',
                characters: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case DELETE:
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state;
    }
};

export default reducer;