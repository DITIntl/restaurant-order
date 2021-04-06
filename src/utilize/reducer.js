const initializeState = {
    order: []
}

export default function reducer(state = initializeState, action) {
    switch(action.type) {
        case "CREATE_ORDER":
            return {...state, order: [...state.order, action.payload]}

        case "RESET_ORDERS":
            return { ...state, order: [] }

        default:
            return state
    }
}