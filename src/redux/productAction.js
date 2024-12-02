export const PRODUCT_ADD = 'product/add'
export const PRODUCT_REMOVE = 'product/remove'



export const productAdd = (value) => ({
    type: PRODUCT_ADD,
    payload: value,
})

export const productRemove = (value) => ({
    type: PRODUCT_REMOVE,
    payload: value,
})

