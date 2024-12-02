import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_RESET,
    COUNTER_INCREMENTBY
} from "./counterAction"

const initalNumber = 0
export const counterReducer = (state = initalNumber, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT: {
            return state + 1
        }
        case COUNTER_DECREMENT: {
            return state - 1
        }
        case COUNTER_RESET: {
            return initalNumber
        }
        case COUNTER_INCREMENTBY: {
            return state + action.payload
        }
        default: {
            return state
        }
    }


}