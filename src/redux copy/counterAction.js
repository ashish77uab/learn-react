export const COUNTER_INCREMENT = 'counter/increment'
export const COUNTER_DECREMENT = 'counter/decrement'
export const COUNTER_RESET = 'counter/reset'
export const COUNTER_INCREMENTBY = 'counter/incrementby'



export const increment = () => ({
    type: COUNTER_INCREMENT,
    payload: '',
})

export const decrement = () => ({
    type: COUNTER_DECREMENT,
    payload: '',
})

export const reset = () => ({
    type: COUNTER_RESET,
    payload: '',
})

export const incrementBy = (value) => ({
    type: COUNTER_INCREMENTBY,
    payload: value,
})