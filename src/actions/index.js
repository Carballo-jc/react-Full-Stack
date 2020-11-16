
// import products from '../data/products'
import types from '../types'

export const previews = (products) =>({
    type:types.carga,
    payload: products
    
}
)
export const filterProduct = (category) =>{
  return{
    type: types.filter,
    payload:category
  }
}