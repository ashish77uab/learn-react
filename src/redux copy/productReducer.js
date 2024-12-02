import {
    PRODUCT_ADD,
    PRODUCT_REMOVE
} from "./productAction"

const initalState = {
    productCategory: {},
    products: [{
        id: 1,
        name: 'IPhone'
    }],
    topProducts: {},
    featureProducts: {},
}
export const productReducer = (state = initalState, action) => {
    switch (action.type) {
        case PRODUCT_ADD: {
            return { ...state, products: [...state.products, action.payload] }
        }
        case PRODUCT_REMOVE: {
            return { ...state, products: [...state.products]?.filter(item => item?.id !== action.payload?.id) }
        }
        default: {
            return state
        }
    }


}