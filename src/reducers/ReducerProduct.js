import products from '../data/products';
import types from '../types'

const initialState= {
    products,
    error:null,

}

export default function( state= initialState, action){
    switch (action.type) {
        case types.carga:
            return{
                ...state,
                products: products.filter(product => product.sublevel_id === 5),
            }
        case types.filter:
            return{
                ...state,
                products: products.filter( product =>{
                    return(product.sublevel_id === action.payload.id )}),
                payload: action.payload
                }
            default:
                return state;    


    }

}